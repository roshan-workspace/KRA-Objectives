import { Inject, Injectable } from '@nestjs/common';
import { Config, CONFIG_OPTION } from './config-constants';

@Injectable()
export class ConfigService {

    constructor(@Inject(CONFIG_OPTION) private readonly config: Config){}

    getConfig(){
        return {key:this.config.secretKey, user:this.config.user}
    }

}
