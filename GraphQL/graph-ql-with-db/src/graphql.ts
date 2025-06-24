
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    price: number;
    title: string;
}

export interface UpdateBookArgs {
    id: number;
    price: number;
    title: string;
}

export interface Book {
    id: number;
    price: number;
    title: string;
}

export interface IMutation {
    addBook(addBookArgs: AddBookArgs): Book | Promise<Book>;
    deleteBook(bookId: number): string | Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): string | Promise<string>;
}

export interface IQuery {
    bookById(bookId: number): Book | Promise<Book>;
    books(): Book[] | Promise<Book[]>;
    index(): string | Promise<string>;
}

type Nullable<T> = T | null;
