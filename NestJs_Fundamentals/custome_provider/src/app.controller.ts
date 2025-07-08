import { Controller, Get, Inject } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';

import {LOGGER_SERVICE_TOKEN} from "./logger/logger.module"
import { TestService } from './test/test.service';

@Controller()
export class AppController {
  constructor(@Inject(LOGGER_SERVICE_TOKEN) private readonly loggerService: LoggerService, private readonly testService:TestService) {}



  @Get()
  log(){
    this.loggerService.log("Log service is working fine")
    return "Log service is working fine"
  }

  @Get('error')
  error(){
    this.loggerService.error("Error service is working fine")
    return "Error service is working fine"
  }


  @Get(`inc`)
  increment(){
    this.testService.increment()
    return this.testService.count
  }
}
