import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrdersService } from "./order.service";
import { Order } from "./entities/order.entity";

@Controller("order")
export class OrderController{

    constructor(private readonly orderServices : OrdersService){}
    @Post()
    PlaceOrder(@Body() order){
        return this.orderServices.placeOrder(order)
    }

    @Get("/:id")
    GetOrderDetailsById(@Param("id") id:string){
        return "This will return the orders by id"
    }




}