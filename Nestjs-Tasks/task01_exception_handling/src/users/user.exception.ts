import { HttpException, HttpStatus } from "@nestjs/common";

export class UserCustomException extends HttpException {
  constructor() {
    super('Custome Exception', HttpStatus.BAD_REQUEST);
  }
}
