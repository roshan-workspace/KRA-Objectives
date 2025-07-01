import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoService } from './video.service';
import { ViewerService } from './viewer.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AdvertismentService } from './advertisment.service';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, VideoService,ViewerService, AdvertismentService],
})
export class AppModule {}
