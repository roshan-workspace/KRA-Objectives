import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';


function globalMiddlewareOne(req:Request,res:Response, next:NextFunction){
  console.log("This is Global Middleware 1");
  next()
}
function globalMiddlewareTwo(req:Request,res:Response, next:NextFunction){
  console.log("This is Global Middleware 2");
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use([globalMiddlewareOne,globalMiddlewareTwo])
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
