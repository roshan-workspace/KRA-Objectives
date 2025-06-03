import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username:string

    @IsEmail()
    email:string

    @IsString()
    password:string

     @IsEnum(["intern" ,"engineer" , "admin"],{
        message:"Valid role required"
    })
    role: "intern" | "engineer" | "admin"
}
