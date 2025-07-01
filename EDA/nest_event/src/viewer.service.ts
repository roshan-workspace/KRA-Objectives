import { Injectable, NotFoundException } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ViewerService {

    @OnEvent('video.created')
    notify({title}:{title:string}){

        console.log(`Hey there is a new video publish by Roshan`, title);
        return 1;
    }

    @OnEvent('video.created')
    doSomething(){
        console.log('Inside do something');
        return 2;
    }

}
