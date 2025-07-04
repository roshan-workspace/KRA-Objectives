import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from "jsonwebtoken"

@Injectable()
export class JwtGuard implements CanActivate {

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    
    const authorizationHeader = ctx.req.headers.authorization;
    if(authorizationHeader){
        const token = authorizationHeader.split(" ")[1];
        try {
            const user = jwt.verify(token,"Secretkey")
            ctx.user = user;
            console.log(user);
            return true
        } catch (error) {
            throw new HttpException("Invalid token: "+ error.message, HttpStatus.UNAUTHORIZED)
        }
    }else{
    return false;
  }

  }
}
