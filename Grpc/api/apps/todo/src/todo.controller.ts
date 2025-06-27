import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { GrpcMethod } from '@nestjs/microservices';
import { PostTodoDTO, Todo, Todos, TodoServiceController } from 'proto/todo';

@Controller()
export class TodoController implements TodoServiceController {
  constructor(private readonly todoService: TodoService) {}

  @GrpcMethod('TodoService', 'PostTodo')
  postTodo(request: PostTodoDTO): Todo {
    return this.todoService.postTodo(request);
  }

  @GrpcMethod('TodoService', 'getTodos')
  getTodos(): Todos {
    return this.todoService.getTodos();
  }
}
