import { Body, Controller, Get, Req, Res, UseInterceptors } from "@nestjs/common";
import { AppInterceptor } from "./app.interceptor";
import { Request, Response } from "express";


@Controller("app")
export class AppController{

    @Get()
    @UseInterceptors(AppInterceptor)
    SayHello():any{
 
        return "This is From the api!!"
    }
}