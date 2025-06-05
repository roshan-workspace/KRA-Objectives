import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usreService: UserService, 
    private jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string):Promise<any>{
    console.log('pass: ', pass);
    console.log('username: ', username);

    const user = await this.usreService.findByUserName(username)

    if(!user){
         throw new UnauthorizedException('Invalid username or password');
    }

   const isMatch = await bcrypt.compare(pass, user.password)
   if(!isMatch) throw new UnauthorizedException('Invalid username or password');

    const {password, ...userInfo} = user

    const payload = userInfo
    const token= await this.jwtService.signAsync(payload)


    return {access_token:token}

  }
}
