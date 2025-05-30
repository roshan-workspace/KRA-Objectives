import { Injectable } from "@nestjs/common"

@Injectable()
export class BookService{

    findAll(){
        return "This will find the all books"
    }

    updateBook(){
        return "This will update the book"
    }

    deleteBook(){
        return "This will delete the book"
    }

    addBook(){
        return "This will add the book"
    }

}