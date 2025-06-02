import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";
import {map} from "rxjs/operators"

@Injectable()
export class AppInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {

       const ctx = context.switchToHttp()
       const request = ctx.getRequest<Request>() 
       if(!request.body){
        request.body = {}
       }
       request.body.name= "Roshan"

       return next.handle().pipe(map((data)=>{ 
        console.log(data, "data");
        return  "from interceptor"
       }))
    }
}