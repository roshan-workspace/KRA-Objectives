import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Virat',
      email: 'virat@gmail.com',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Rohit',
      email: 'rohit@gmail.com',
      role: 'intern',
    },
    {
      id: 3,
      name: 'Hardik',
      email: 'hardik@gmail.com',
      role: 'engineer',
    },
    {
      id: 4,
      name: 'KL Rahul',
      email: 'klrahul@gmail.com',
      role: 'intern',
    },
    {
      id: 5,
      name: 'Jasprit',
      email: 'jasprit@gmail.com',
      role: 'engineer',
    },
  ];


    findAll(role?: "intern" | "engineer" | "admin"){
        if(role){
            const rolesArray =  this.users.filter((user)=> user["role"].toLocaleLowerCase() === role.toLocaleLowerCase())
            if(rolesArray.length === 0) throw new NotFoundException("Role not Found!")
            return rolesArray
        }
            return this.users
    }


    findOne(id:number){
        const user = this.users.find((user)=>user.id === id)
        if(!user){
            throw new NotFoundException("User Not Found")
        }
        
        return user
    }



    create(user:CreateUserDto){
            const userWithHightestId = this.users.toSorted((a,b)=>b.id - a.id)
            const newUser = {id: userWithHightestId[0].id+1,...user}
            this.users.push(newUser)
            return newUser
    }
    

    findAndUpdate(id:number,updateUser:UpdateUserDto){
        this.users  = this.users.map((user)=>{
            if(user.id === id){
                return {...user, ...updateUser}
            }
                return user
        })

        return this.findOne(id)
    }


    deleteOne(id:number){
        const removedUser =  this.findOne(id)
        this.users = this.users.filter((user)=>user.id !== id)
        return removedUser
    }
}
