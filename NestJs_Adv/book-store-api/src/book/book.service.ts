import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BookService {
 private books = [
  {
    id:"fa80128b-2bc9-4a3d-9cdf-cb58fac4e418",
    title: 'Gunaho Ka Devta',
    author: 'Dharamvir Bharti',
    genre: 'Fiction',
    price:450,
    publishYear: 1949,
  },
  {
    id:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
    title: 'The Guide',
    author: 'R.K. Narayan',
    genre: 'Fiction',
    price:399,
    publishYear: 1958,
  },
  {
    id:"acde070d-8c4c-4f0d-9d8a-162843c10333",
    title: 'A Suitable Boy',
    author: 'Vikram Seth',
    genre: 'Drama',
    price:500,
    publishYear: 1993,
  },
  {
    id:"123e4567-e89b-12d3-a456-426655440000",
    title: 'Train to Pakistan',
    author: 'Khushwant Singh',
    genre: 'Historical Fiction',
    price:699,
    publishYear: 1956,
  },
  {
    id:"a9e86162-d472-11e8-b36c-ca2487b91951",
    title: 'The White Tiger',
    author: 'Aravind Adiga',
    genre: 'Satire',
    price:539,
    publishYear: 2008,
  },
  {
    id:"550e8400-e29b-41d4-a716-446655440000",
    title: 'Midnights Children',
    author: 'Salman Rushdie',
    genre: 'Magic Realism',
    price:479,
    publishYear: 1981,
  },
];


  create(Book: CreateBookDto) {
    const id = uuidv4();
    const newBook = {id,...Book}
    this.books.push(newBook)
    return newBook
  }

  findAll(role:{}) {
    console.log(role);
    return this.books
  }

  findOne(id: string) {
    const book = this.books.find((book)=>book.id == id)
    if(!book) throw new NotFoundException()
    return book  
  }

  update(id: string, UpdateBook: UpdateBookDto) {
     this.books = this.books.map((book)=>{
        if(book.id == id){
          return { ...book, ...UpdateBook}
        }
        return book
      })
      return this.findOne(id)
  }

  delete(id: string) {
    const removedBook = this.findOne(id)
    this.books = this.books.filter((book)=>{
      return book.id !== id
    })
    return removedBook
  }
}
