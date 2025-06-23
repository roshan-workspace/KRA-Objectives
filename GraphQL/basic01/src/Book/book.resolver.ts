import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';

import { Book as BookModel } from '../graphql';

@Resolver((of) => Book)
export class BookResolver {
  @Query((returs) => [Book], { name: 'books' })
  getAllBooks() {
    let arr: BookModel[] = [
      { id: 1, title: 'Rich Dad Poor Dad', price: 259 },
      { id: 2, title: 'Gunhao ka devta', price: 450 },
      { id: 3, title: '11 Rules for life', price: 116 },
    ];
    return arr;
  }
}
