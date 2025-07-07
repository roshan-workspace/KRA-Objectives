import { Injectable } from '@nestjs/common';
import { ViewerService } from './viewer.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class VideoService {
constructor(private eventEmitter: EventEmitter2) {}

    async publish(){
        const title = "How to get Rich within a month";
        console.log('Publishing a new Video');

        const result = this.eventEmitter.emitAsync('video.created', {title})

        return {message:'All Done', result};
    }

}
