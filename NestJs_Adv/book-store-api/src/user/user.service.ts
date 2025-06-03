import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class UserService {
 private Users = [
  {
    id: 'acde070d-8c4c-4f0d-9d8a-162843c10333',
    username: 'Rohan',
    email: 'rohan@gmail.com',
    password: '123',
    role: 'admin',
  },
  {
    id: 'b1cdef0a-234b-4a4f-9e3a-2a4e5bb12345',
    username: 'Aisha',
    email: 'aisha@gmail.com',
    password: '123',
    role: 'user',
  },
  {
    id: 'c9db7800-991a-4877-a4c2-5e4a77e91236',
    username: 'Varun',
    email: 'varun@gmail.com',
    password: '123',
    role: 'moderator',
  },
  {
    id: 'd8ea6601-782f-40c8-8c91-9f327b112ab3',
    username: 'Meera',
    email: 'meera@gmail.com',
    password: '123',
    role: 'user',
  },
  {
    id: 'e4ff7a22-ef71-4f11-a2dd-6d3ad9a4c321',
    username: 'Ajay',
    email: 'ajay@gmail.com',
    password: '123',
    role: 'admin',
  },
];


  create(user: CreateUserDto) {
    const id = uuidv4();
     const newUser = {id,...user}
     this.Users.push(newUser)
     return newUser
  }

  findAll() {
    return this.Users
  }

  findOne(id: string) {
     const user = this.Users.find((user)=>user.id == id)
     return user
  }
}
