import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException{
    constructor(){
        super("This is costome Book Exception", HttpStatus.NOT_FOUND)
    }
}