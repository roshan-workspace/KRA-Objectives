import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddUserArgs } from './args/addUser.args';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findUserByEmail(email: String): Promise<User | null> {
    const user = await this.userRepo.findOne({ where: { email: email } });
    return user;
  }

  async registerUser(userArgs: AddUserArgs): Promise<User> {
    const user = this.userRepo.create(userArgs)
    return await this.userRepo.save(user);
  }
}
