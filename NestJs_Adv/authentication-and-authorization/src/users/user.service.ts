import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTANTS } from 'src/constants';

@Injectable()
export class UserService {
  public user: User[] = [
    {
      username: 'Roshan',
      password: 'secret',
      age: 21,
      email: 'roshan@gmail.com',
      role: CONSTANTS.ROLE.ADMIN
    },
    {
      username: 'Pratik',
      password: '54321',
      age: 24,
      email: 'pratik@gmail.com',
      role:CONSTANTS.ROLE.MANAGER
    },
    {
      username: 'Vishal',
      password: '12345',
      age: 26,
      email: 'vishal@gmail.com',
      role:CONSTANTS.ROLE.USER
    },
    {
      username: 'Rahul',
      password: 'abcd',
      age: 23,
      email: 'rahul@gmail.com',
      role:CONSTANTS.ROLE.USER
    },
  ];


  getUserByName(userName:string){
    return this.user.find((user)=>user.username == userName)
  }
}
