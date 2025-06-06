import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { CustomUserRepository } from './Repo/user.repository';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {

  constructor(private readonly UserRepository: CustomUserRepository) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const emailexits = await this.isEmailExist(createUserDto.email);
    const usernameexits = await this.isUsernameExist(createUserDto.userName);
    if (emailexits) {
      throw new ConflictException('Email Already exists!');
    }

    if (usernameexits) {
      throw new ConflictException('UserName Already exists!');
    }

    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(createUserDto.password, salt)
      createUserDto.password = hashedPassword
      return await this.UserRepository.save(createUserDto);
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.UserRepository.find();
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Failed to fetch all users');
    }
  }

  async findOne(id: number) {
    try {
      return await this.UserRepository.findOne({ where: { id } });
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Failed to find the user');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.UserRepository.update(id, updateUserDto);
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Failed to update the user');
    }
  }

  async remove(id: number) {
    try {
      return await this.UserRepository.delete(id);
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Failed to delete the user');
    }
  }


  async isEmailExist(email: string): Promise<boolean> {
    const user = await this.UserRepository.findOne({ where: { email } });
    return !!user;
  }

  async isUsernameExist(userName: string): Promise<boolean> {
    const user = await this.UserRepository.findOne({ where: { userName } });
    return !!user;
  }

  async findByUserName(userName:string):Promise<User | null>{
    const user =  await this.UserRepository.findOne({where:{userName}})
    return user
  }
}
