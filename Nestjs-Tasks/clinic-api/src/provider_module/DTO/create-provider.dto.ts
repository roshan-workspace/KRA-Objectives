import { ArrayNotEmpty, ArrayUnique, IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Gender } from "../constants/gender.enum";

export class CreateProviderDto{

    @IsString()
    @IsNotEmpty()
    firstName:string

    @IsString()
    @IsOptional()
    lastName:string

    @IsEnum(Gender,{message:"Gender must be one of this 'male', 'female', 'other'"})
    gender:Gender

    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsNumber({},{each:true})
    services:number[];


    @IsNumber()
    @IsNotEmpty()
    createdBy:number


    


}