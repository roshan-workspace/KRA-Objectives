import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private users: any[] = [];
  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(createUserDto.email),
    );
  }
}
