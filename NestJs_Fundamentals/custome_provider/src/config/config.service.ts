import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {


    getLogLevel(){
        console.log(`Debug`);
        return `Debug`
    }
}
