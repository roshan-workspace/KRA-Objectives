import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import {
  CancelOrderHandler,
  CreateOrderHandler,
  ProcessPaymentHandler,
  ReserveInventoryHandler,
  ShipOrderHandler,
} from './commands/handlers/order.command-handler';
import { CqrsModule } from '@nestjs/cqrs';
import { OrderSaga } from './saga/order.saga';

@Module({
  imports: [CqrsModule],
  providers: [
    CreateOrderHandler,
    OrderSaga,
    ProcessPaymentHandler,
    ReserveInventoryHandler,
    ShipOrderHandler,
    CancelOrderHandler
  ],
  controllers: [OrderController],
})
export class OrderModule {}
