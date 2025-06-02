import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Query } from "@nestjs/common";
import { BookDto } from "./book.dto";
import { BookPipe } from "./pipes/book.pipe";


@Controller("book")
export class BookController{


    @Get(":uuid")
    findBookById(@Param("uuid",ParseUUIDPipe)  uuid:string):string{
        console.log(uuid, typeof uuid);
        return `Book by this ID: ${uuid}`
    }

    @Post("/add")
    addBook(@Body(new BookPipe()) book: BookDto){ 
        return "Book added successfully."
    }

}