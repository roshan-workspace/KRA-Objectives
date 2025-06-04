import { BadRequestException, Body, Controller, Get, GoneException, HttpException, Post, UseFilters, ValidationPipe } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { UserCustomException } from './user.exception';
import { UserCustomExceptionFilter } from './user.exception.filter';
import { UserDto } from './DTO/user.create.dto';

@Controller("user")
export class UserController {
  constructor() {}

  @Get()
  findAllUser():string{
    return "this will return all the user"
  }

  @Post()
  createUser(@Body(ValidationPipe) user:UserDto){
    return { message: "User created successfully!", User:user}
     
  }
 
}
