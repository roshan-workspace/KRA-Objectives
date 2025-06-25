import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { BOOKS_PARTTERNS } from '@app/contracts/books/book.partterns';
import { BOOKS_CLIENT } from './constants';

@Injectable()
export class BooksService {

  constructor(@Inject(BOOKS_CLIENT) private bookClient: ClientProxy){}

  create(createBookDto: CreateBookDto) {
    return this.bookClient.send(BOOKS_PARTTERNS.CREATE,createBookDto)
  }

  findAll() {
    return this.bookClient.send(BOOKS_PARTTERNS.FIND_ALL,{})
  }

  findOne(id: number) {
    return this.bookClient.send(BOOKS_PARTTERNS.FIND_ONE,id)
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookClient.send(BOOKS_PARTTERNS.UPDATE,{id, ...updateBookDto})
  }

  remove(id: number) {
    return this.bookClient.send(BOOKS_PARTTERNS.REMOVE,id)
  }
}
