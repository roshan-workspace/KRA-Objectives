import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from './auth/auth.guard';


@UseGuards(JwtGuard)
@Controller()
export class AppController {
  @Get()
  getCookie(@Req() request: Request): string {
    console.log(request.cookies); 
    return "ok"
  }
}
