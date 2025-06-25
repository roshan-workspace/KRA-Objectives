import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'Roshan',
      lastName: 'Bhagat',
      age: 21,
    },
    {
      id: 2,
      firstName: 'Deepak',
      lastName: 'Kumar',
      age: 20,
    },
  ];


  findAll() {
    return this.users;
  }
}
