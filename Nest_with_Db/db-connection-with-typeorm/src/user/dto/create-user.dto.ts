import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsStrongPassword, Max, Min } from "class-validator"
import { UserRole } from "../constants/roles.enum"
import { Type } from "class-transformer"

export class CreateUserDto {

    @IsNotEmpty()
    @IsString({message:"First Name should be a string"})
    firstName:string
    
    @IsOptional()
    @IsString({message:"Last Name should be a string"})
    lastName?:string

    @IsNotEmpty()
    @IsString()
    userName:string

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @IsStrongPassword({minLength:6},{message:"Please keep a strong password!"})
    password:string

    @IsEnum(UserRole,{
        message:"Valid role required Role could be : superadmin, admin, user"
    })
    role:UserRole

    @Type(() => Number)
    @IsNumber()
    @Min(1, {message:"Age should be greater then or equal to 1"})
    @Max(100, {message: "Age should be less then or equal to 100"})
    age:number

}
