import { DataSource, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomUserRepository extends Repository<User>{
 constructor(private dataSource:DataSource){
    super(User, dataSource.createEntityManager())
 }

 async findByAge(age:number):Promise<any>{
        const user = await this.findOne({where:{age:age}})
        if(!user) return "User not found!"
        return user       
 }

}