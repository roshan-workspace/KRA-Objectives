import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller('book')
export class BookController{

    constructor(private readonly bookService:BookService){}
    
    @Get()
    findALL(@Query("genre") genre? : "fiction" | "non-fiction"){
       return this.bookService.findAll(genre)   
    }

    @Get(":id")
    findOne(@Param("id") id:string){
        return this.bookService.findOne(id)
    }

    @Post()
    addBook(@Body() book:Book){
        return this.bookService.createBook(book)
    }

    @Patch(":id")
    updateBook(@Param("id") id:string, @Body() updateBook:{id?:string,title?:string, author?:string,published?:string,genre?:string  }){
        return this.bookService.updateBook(id, updateBook)
    }


    @Delete(":id")
    deleteBook(@Param("id") id:string){
        return this.bookService.deleteOne(id)
    }

}