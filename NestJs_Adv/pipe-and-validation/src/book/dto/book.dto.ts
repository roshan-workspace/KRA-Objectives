import {  IsNumber, IsString } from "class-validator"

export class BookDto{

    @IsNumber()
    id:string;

    @IsString()
    name:string
}

