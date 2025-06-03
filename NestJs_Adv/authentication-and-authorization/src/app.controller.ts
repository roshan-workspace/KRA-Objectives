import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './users/user.entity';



@Controller("app")
export class AppController {
  constructor(){}

  @Post("/login")
  @UseGuards(AuthGuard("local"))
  login(@Request() req):User{ 
    return req.user
  }
}


