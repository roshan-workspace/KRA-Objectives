import { Injectable, Logger } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { UserCreatedEvent } from './events/user-created.events';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class AppService {

  constructor (private readonly eventEmitter: EventEmitter2,
    private schedulerRegistry:SchedulerRegistry
  ){}

  private readonly logger = new Logger(AppService.name)


  private establishWsConnection(userId:string){
    this.logger.log('Establishing Ws Connection with user....', userId)
  }
             

   async createUser(body:createUserDto){
      const userId = '12345' 
      this.logger.log( `Creating User `, body)
      this.eventEmitter.emit('user.created',new UserCreatedEvent(userId, body.email))

      const establishWsTimeout = setTimeout(() => this.establishWsConnection(userId), 5000 );

      this.schedulerRegistry.addTimeout(
        `${userId}_establish_ws`,establishWsTimeout
      );
    }

    @OnEvent('user.created')
    welcomeNewUser(payload:UserCreatedEvent){
      this.logger.log(`Welcoming new user:`,payload )
    }

    @OnEvent('user.created',  {async:true})
    async sendingGift(payload:UserCreatedEvent){
      this.logger.log("Sending gift to user: ",payload)
      await new Promise<void>((res,rej)=>setTimeout(()=>res(), 3000))
      this.logger.log('Welcome gift send.')
    }


    @Cron(CronExpression.EVERY_10_SECONDS)
    deleteExpiredUsers(){
      this.logger.log(`Deleting expired users`)
    }

}
