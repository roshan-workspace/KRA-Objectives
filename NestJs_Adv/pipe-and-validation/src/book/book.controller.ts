import { BadRequestException, Body, Controller, Get, Param  , ParseUUIDPipe, Post, Query, UseFilters, ValidationPipe } from "@nestjs/common";
import { BookDto } from "./dto/book.dto";
import { BookPipe } from "./pipes/book.pipe";
import { BookException } from "./book.exception";
import { BookCostomeExceptionFilter } from "./book.exception.filter";


@Controller("book")
export class BookController{


    @Get(":uuid")
    findBookById(@Param("uuid",ParseUUIDPipe)  uuid:string):string{

        console.log(uuid, typeof uuid);
        return `Book by this ID: ${uuid}`
    }

    @Get()
    @UseFilters(BookCostomeExceptionFilter)
    findAllBooks(){
        // throw new BadRequestException({error:"Something went wrong!", status:404})
        throw new BadRequestException()
    }

    // @Post("/add")
    // addBook(@Body(new BookPipe()) book: BookDto){   // use of a costome pipe
    //     return "Book added successfully."
    // }
    
    @Post("/add")
    addBook(@Body(ValidationPipe) book: BookDto){ 
        return book
    }

}