import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'COMMUNICATION',
        transport: Transport.TCP
       },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
