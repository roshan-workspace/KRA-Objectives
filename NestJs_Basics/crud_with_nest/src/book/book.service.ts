import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';



@Injectable()
export class BookService{
    public books: Book[] = []

    // add book
    // update book
    // delete book 
    // find all

   findAll(genre? : "fiction" | "non-fiction"){
      if(genre){
        const genreArray = this.books.filter((book)=>{
            return book.genre.toLowerCase() == genre.toLowerCase()
        })
        return genreArray
      } 
      return this.books
   }

   findOne(id:string){
        const book = this.books.find((book)=>book.id == id)
        if(!book){
            return "Book not found with this id!"
        }
        return book
   }

   createBook(book: Book){
        book.id = uuidv4()
        this.books.push(book)

        return "New Book added successfully"
   }


   updateBook(id:string, updateBook){
        this.books  = this.books.map((book)=>{
            if(book.id==id){
                return {...book, ...updateBook }
            }
            else{
                return book
            }
        })

       return this.findOne(id)
   }


   deleteOne(id:string){
    const removedBook  = this.findOne(id)
    this.books = this.books.filter((book)=>book.id !== id)
    return removedBook
   }


}