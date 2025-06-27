import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostTodoDTO, Todo, Todos } from 'proto/todo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  postTodo(@Body() postTodoDto:PostTodoDTO){
    return this.appService.postTodo(postTodoDto)
  }

  @Get()
  getTodos() {
    return this.appService.getTodos();
  }
}
