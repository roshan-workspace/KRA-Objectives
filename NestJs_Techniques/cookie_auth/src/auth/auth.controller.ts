import { Controller, Get, Injectable, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get('login')
  async login(@Res({ passthrough: true }) res) {
    const payload = { username: 'Roshan', id: 1 };

    res.cookie('user_token', this.jwtService.sign(payload), {
      expires: new Date(Date.now() + 360000),
    });

    return {msg:'Login Successfull'};
  }

  @Get('logout')
  async logout(@Res({passthrough: true}) res ){
    res.cookie('user_token','', {expries: new Date(Date.now())})

    return {msg:"Logout Successfull"};
  }
} 




