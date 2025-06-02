import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BookGuard } from './book.guard';

@Controller("book")
@UseGuards(new BookGuard())
export class BookController {


  @Get()
  findBooks(): string {
    return "This will return books";
  }


  @Post()
  addBooks(){
    return "This will add the Book"
  }
}
