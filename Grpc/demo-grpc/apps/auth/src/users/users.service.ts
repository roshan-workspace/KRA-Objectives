import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { User,CreateUserDto ,UpdateUserDto, Users, Pagination} from '@app/common';
import { randomUUID } from 'crypto';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UsersService implements OnModuleInit {

  private  users:User[] = []

  onModuleInit(){
    for (let i = 0;i<100; i++){
      this.create({username:randomUUID(), password:randomUUID(), age:10})
    }
  }

  create(createUserDto: CreateUserDto):User {
    const user: User ={
      ...createUserDto,
      subcribed:false,
      socialMedia:{},
      id:randomUUID()
    }

    this.users.push(user)
    return user
  }

  findAll():Users {
    return {users:this.users}
  }

  findOne(id: string){
    return this.users.find((user)=>user.id == id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    let updatedUser:any;
    this.users = this.users.map((user)=>{
      if(user.id == id){

        updatedUser = {...user, ...updateUserDto, id}
        return updatedUser

      }
      return user
    })

    return updatedUser
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((user)=>user.id == id)
    if(userIndex !== -1){
      return this.users.splice(userIndex)[0]
    }

    throw new NotFoundException(`User with the the id:${id} not found`)
  }


  queryUsers(paginationDtoStream:Observable<Pagination>,):Observable<Users>{
    const subject = new Subject<Users>();

    const onNext =(pagination:Pagination)=>{
      const start = pagination.page* pagination.skip;
      subject.next({users:this.users.slice(start, start+pagination.skip)})
    }
    
  const onComplete = () => subject.complete();
  paginationDtoStream.subscribe({
    next:onNext,
    complete:onComplete,
  });

  return subject.asObservable()
  }


}
