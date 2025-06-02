import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { BookDto } from "./book.dto";
import { Book } from "./book.decorator";

@Controller("book")
export class BookController{

    @Get()
    findAll():string{
        return "This will give the all books data"
    }


    @Post()
    addBook(@Book("author") name: string):string{
        return name 
    }
}