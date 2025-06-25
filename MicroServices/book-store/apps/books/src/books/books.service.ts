import { Injectable } from '@nestjs/common';


import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { BookDto } from '@app/contracts/books/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    { id: 1, title: 'Kafan', author: 'Munshi Premchand', rating: 5 },
    { id: 2, title: 'Godan', author: 'Munshi Premchand', rating: 4.5 },
    { id: 3, title: 'Gunhao', author: 'Dhramvir Bharti', rating: 4 },
  ];
  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    };

    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const book = this.books.find((book) => book.id == id);
    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    let updatedBook: BookDto | null = null;
    this.books = this.books.map((book) => {
      if (book.id == id) {
        updatedBook = { ...book, ...updateBookDto };
        return updatedBook;
      }
      return book;
    });
    return `This action updates a #${id} book`;
  }

   remove(id: number) {
    this.books  =  this.books.filter((book)=>book.id != id)
    return  "Book Deleted successfully"
  }
}
