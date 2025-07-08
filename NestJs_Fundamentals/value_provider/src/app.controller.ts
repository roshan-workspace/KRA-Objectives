import { Controller, Get, Inject } from "@nestjs/common";
import { ConfigService } from "./config.service";

@Controller()
export class AppController {
  constructor(
    private readonly  configService:ConfigService ) {}



 

  @Get('config')
  getCongig() {
    const configValue = this.configService.getConfig()
    console.log(configValue)
    return configValue
   
  }
}
