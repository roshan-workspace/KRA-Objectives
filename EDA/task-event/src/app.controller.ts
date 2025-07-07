import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { createUserDto } from './dto/createUser.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  creatUser(@Body() body:createUserDto){
    this.appService.createUser(body);
  }
}
