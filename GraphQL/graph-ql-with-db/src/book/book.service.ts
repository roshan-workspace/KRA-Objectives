import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entity/book.entity';
import { Repository } from 'typeorm';
import { AddBookArgs } from './args/addbook.args';
import { UpdateBookArgs } from './args/updatebook.args';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
  ) {}

  async findAllBooks(): Promise<Book[]> {
    const books = await this.bookRepo.find();
    return books;
  }


  async findbyId(id: number): Promise<Book | null> {
    const book = await this.bookRepo.findOne({ where: { id: id } });
    return book;
  }


  async delete(id: number): Promise<String> {
    await this.bookRepo.delete(id);
    return 'Book has been deleted!';
  }
  

  async addBook(addBookArgs: AddBookArgs): Promise<Book> {
    const book: Book = new Book();
    book.title = addBookArgs.title;
    book.price = addBookArgs.price;

    const newBook = await this.bookRepo.save(book);
    return newBook;
  }

  async updateBook(updateBookArgs: UpdateBookArgs): Promise<string> {
    const book = await this.bookRepo.findOne({
      where: { id: updateBookArgs.id },
    });

    if (!book) {
      throw new Error(`Book with id ${updateBookArgs.id} not found`);
    }

    book.title = updateBookArgs.title;
    book.price = updateBookArgs.price;

    await this.bookRepo.save(book);
    return 'Book updated successfully';
  }
}
