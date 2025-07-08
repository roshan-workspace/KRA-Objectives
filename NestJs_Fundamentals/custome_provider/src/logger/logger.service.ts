import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
    log(message:string){
        console.log(`[LOG] this is a logger message: ${message}`);
    }

    error(message:string){
        console.error(`[ERROR] this is a error message: ${message}`);
    }
}
