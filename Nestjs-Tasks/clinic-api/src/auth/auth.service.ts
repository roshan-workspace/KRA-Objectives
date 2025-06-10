import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService:JwtService){}

    async validateUser(userName:string, pass:string):Promise<any>{
        const user =  await this.userService.findByUserName(userName)
        if(user && await bcrypt.compare(pass,user.password) ){
            const {password, ...result} = user
            return result
        }
        return null
    }


    async login(user:any){
        const payload = {username:user.userName, id: user.id, firstName:user.firstName, role:user.role}
        return {
            access_token :this.jwtService.sign(payload)
        }
    }
}
