import { Injectable } from '@nestjs/common';
import { PostTodoDTO, Todo, Todos } from 'proto/todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 'Setup ubantu',
      isDone: false,
    },
    {
      id: 2,
      description: 'Learing grpc',
      isDone: false,
    },
  ];

  postTodo(request: PostTodoDTO): Todo {
    const newTodo = {id:this.todos.length+1,...request};
    this.todos.push(newTodo)
    return newTodo

  }

  getTodos(): Todos {
    return {Todos: this.todos}
  }
}
