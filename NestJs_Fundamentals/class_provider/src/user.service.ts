import { Injectable } from "@nestjs/common"

Injectable()
export class UserService{
    constructor(){}

    getUsers(){
        console.log("List of all the users")
    }
}