import { Module } from '@nestjs/common';
import { BookController } from './book.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
})
export class BookModule {
    constructor(){
        console.log("This is from the book controller.");
    }
}
