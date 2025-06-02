import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

    export const Book = createParamDecorator((data : string, executionContext : ExecutionContext)=>{
const context = executionContext.switchToHttp()
const request = context.getRequest<Request>()

   return request.body ? request.body?.[data] : request.body;
})