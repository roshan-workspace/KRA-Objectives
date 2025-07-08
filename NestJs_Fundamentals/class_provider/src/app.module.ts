import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, 
    {
      provide:UserService,
      useClass:UserService
    }
  ],
})
export class AppModule {}
