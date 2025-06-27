import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PostTodoDTO, Todo, TODO_SERVICE_NAME, TodoServiceClient } from 'proto/todo';
import { EMPTY } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  private todoServiceClient: TodoServiceClient;

  constructor(@Inject('todo') private clientGrpc: ClientGrpc) {}

  onModuleInit() {
    this.todoServiceClient =
      this.clientGrpc.getService<TodoServiceClient>
      (TODO_SERVICE_NAME);
  }

  getTodos(){
    return this.todoServiceClient.getTodos({})
  }

  postTodo(postTodoDto:PostTodoDTO){
    return this.todoServiceClient.postTodo(postTodoDto)
  }
}
