import { CanActivate, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable } from "rxjs";

export const Roles = {
  ADMIN: 'ADMIN',
  USER: 'USER',
};


export class RoleGuard implements CanActivate{
    public role:string;

    constructor(role:string){
        this.role = role;
    }


    canActivate(context: ExecutionContext):  boolean  {
         const ctx = GqlExecutionContext.create(context).getContext();
         const {role}  = ctx.user;
         if(role==this.role) return true
         return false
    }
}