import { IsAlpha, IsDate, isDateString, IsDateString, IsNotEmpty, IsString, Length, Matches, Max, MaxDate, MaxLength, Min, MinDate, Validate } from "class-validator"
import { Type } from "class-transformer"
import { CustomeDobValidator } from "../customeDobValidator"

export class UserDto{
    
    @Min(1, {message:"Minimun age should be greater then or Equal to 1"})
    @Max(110, {message: "Maximum age should be less then Equal to 110"})
    age:number


    // @IsAlpha()
    @IsNotEmpty()
    @MaxLength(40)
    @Matches(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/ ,{message : "Name should contain only Alphabets and contains only one space"})
    name:string


    // @Validate(CustomeDobValidator, [15])
    // @MaxDate(new Date("2010-06-04"))  // this is Could be also a way to handle this
    @Type(()=>Date)
    @IsDate()
    @MaxDate(new Date(new Date().setFullYear(new Date().getFullYear() - 15)),{message:"Your Age Should be greater then 15"})  
    dob:Date;
}