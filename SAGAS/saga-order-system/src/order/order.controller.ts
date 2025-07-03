import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from "./commands/order.command"
import { v4 as uuidv4 } from 'uuid';
@Controller('orders')
export class OrderController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createOrder(@Body('orderId') body: string) {
     const orderId = uuidv4();
    await this.commandBus.execute(new CreateOrderCommand(orderId));
    return { message: `Order ${orderId} creation initiated.` };
  }
}
