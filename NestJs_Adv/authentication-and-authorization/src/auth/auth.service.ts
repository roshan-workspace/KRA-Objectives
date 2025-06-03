import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.entity";

@Injectable()
export class AuthService{
    constructor(private readonly jwtService: JwtService){
    }

    geterateToken(payload: User):string{
        return this.jwtService.sign(payload)
    }
}