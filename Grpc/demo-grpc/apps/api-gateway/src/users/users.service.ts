import { CreateUserDto, FindOneUserDto, Pagination, UpdateUserDto, USER_SERVICE_NAME, UserServiceClient } from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { AUTH_SERVICE } from './constants';
import { ClientGrpc } from '@nestjs/microservices';
import { ReplaySubject, skip } from 'rxjs';


@Injectable()
export class UsersService implements OnModuleInit {
private userService:UserServiceClient;

constructor (@Inject(AUTH_SERVICE) private client :ClientGrpc){}

onModuleInit() {
  this.userService = this.client.getService<UserServiceClient>(USER_SERVICE_NAME)
}

  create(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto)
  }

  findAll() {
    return this.userService.findAllUser({})
  }

  findOne(id: string) {
    return this.userService.findOne({id})
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userService.updateUser({...updateUserDto})
  }

  remove(id: string) {
    return this.userService.removeUser({id})
  }

  emailUsers(){
    const users$ =  new ReplaySubject<Pagination>;

    users$.next({page:0,skip:25});
    users$.next({page:1,skip:25});
    users$.next({page:2,skip:25});
    users$.next({page:3,skip:25});

    users$.complete();

    let chunkNumber = 1;

    this.userService.queryUsers(users$).subscribe((users)=>{
      console.log('Chunk',chunkNumber, users)
      chunkNumber+=1
    })
  }
}
