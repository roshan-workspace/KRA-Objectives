import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public user: User[] = [
    {
      username: 'Roshan',
      password: 'secret',
      age: 21,
      email: 'roshan@gmail.com',
    },
    {
      username: 'Pratik',
      password: '54321',
      age: 24,
      email: 'pratik@gmail.com',
    },
    {
      username: 'Vishal',
      password: '12345',
      age: 26,
      email: 'vishal@gmail.com',
    },
  ];


  getUserByName(userName:string){
    return this.user.find((user)=>user.username == userName)
  }
}
