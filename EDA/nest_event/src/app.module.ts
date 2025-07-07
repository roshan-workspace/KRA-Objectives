import { Module, OnApplicationShutdown } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoService } from './video.service';
import { ViewerService } from './viewer.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AdvertismentService } from './advertisment.service';
import { single } from 'rxjs';
import { DiscoveryModule } from '@nestjs/core';

@Module({
  imports: [EventEmitterModule.forRoot(), DiscoveryModule],
  controllers: [AppController],
  providers: [AppService, VideoService,ViewerService, AdvertismentService],
})
export class AppModule implements OnApplicationShutdown {
  onApplicationShutdown(signal?: string) {
    console.log("Shutdown", signal);
  }
}
