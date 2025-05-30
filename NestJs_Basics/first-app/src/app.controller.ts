import { Body, Controller, Delete, Get, Patch, Post, Query, Redirect } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")
export class BookController{

    // public bookService: BookService = new BookService()
    constructor( private bookService: BookService){}
    // @Get()
    // @Redirect("https://docs.nestjs.com", 302)  

    // findAll(@Query("version") version:string){
    //     console.log(version);
    //     if(version === "5"){
    //         return {url:'https://docs.nestjs.com/v5/'}
    //     }
    // }

    @Get()
    findAll(){
        return this.bookService.findAll()
    }

    @Post()
    addBook(@Body() book:{}):string{
        console.log(book);
        console.log("Book added");
        return this.bookService.addBook()
    }

    @Patch(":id")
    updateBook():string{
       return this.bookService.updateBook()
    }

    @Delete(":id")
    deteleBook():string{
        return this.bookService.deleteBook()
    }
}