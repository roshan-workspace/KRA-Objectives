import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

export class CreateBookDto {

    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    author:string

    @IsString()
    @IsNotEmpty()
    genre:string

    @IsNumber()
    @IsNotEmpty()
    publishYear:number

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    price:number
}


