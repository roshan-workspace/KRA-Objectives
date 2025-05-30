import { Body, Controller, Delete, Get, Patch, Post, Query, Redirect } from "@nestjs/common";

@Controller("book")
export class BookController{
    
    @Get()
    @Redirect("https://docs.nestjs.com", 302)  
    
    findAll(@Query("version") version:string){
        console.log(version);
        if(version === "5"){
            return {url:'https://docs.nestjs.com/v5/'}
        }
    }

    @Post()
    addBook(@Body() book:{}):string{
        console.log(book);
        console.log("Book added");
        return "Book Added"
    }

    @Patch(":id")
    updateBook():string{
       return "Book Updated"
    }

    @Delete(":id")
    deteleBook():string{
        return "Book Deleted"
    }
}