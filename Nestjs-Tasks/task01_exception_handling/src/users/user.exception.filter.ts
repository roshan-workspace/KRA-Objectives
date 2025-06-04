import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request } from "express";

@Catch(HttpException)
export class UserCustomExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const request  = ctx.getRequest<Request>();

        console.log(request.body);
    }
}