import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class RoleGuard implements CanActivate{
    constructor(){}

    canActivate(context: ExecutionContext): boolean  {
        
    }
}