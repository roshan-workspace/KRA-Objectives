import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AdvertismentService {
  @OnEvent('video.created')
  attachAdvertisment(title:string){
    console.log('Attaching a relevent advertisment to the video', title);
    return 3;
  }

}
