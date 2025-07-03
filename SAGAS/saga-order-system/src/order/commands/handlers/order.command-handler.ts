import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import {
    CancelOrderCommand,
  CreateOrderCommand,
  ProcessPaymentCommand,
  ReserveInventoryCommand,
  ShipOrderCommand,
} from '../order.command';
import {
  InventoryReservationFailedEvent,
  InventoryReservedEvent,
  OrderCancelledEvent,
  OrderCreatedEvent,
  OrderShippedEvent,
  PaymentProcessedEvent,
} from 'src/order/Events/order.events';
import { error } from 'console';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: CreateOrderCommand): Promise<void> {
    console.log(`Order Created: ${command.orderId}`);
    this.eventBus.publish(new OrderCreatedEvent(command.orderId));
  }
}

@CommandHandler(ProcessPaymentCommand)
export class ProcessPaymentHandler
  implements ICommandHandler<ProcessPaymentCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: ProcessPaymentCommand): Promise<void> {
    console.log(`Payment Processed: ${command.orderId}`);
    this.eventBus.publish(new PaymentProcessedEvent(command.orderId));
  }
}

@CommandHandler(ReserveInventoryCommand)
export class ReserveInventoryHandler
  implements ICommandHandler<ReserveInventoryCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: ReserveInventoryCommand): Promise<void> {
    console.log(`Inventory Reserved: ${command.orderId}`);
    try {
      this.eventBus.publish(new InventoryReservedEvent(command.orderId));
      throw new error
    } catch (err) {
      this.eventBus.publish(
        new InventoryReservationFailedEvent(command.orderId, err.message),
      );
    }
  }
}

@CommandHandler(ShipOrderCommand)
export class ShipOrderHandler implements ICommandHandler<ShipOrderCommand> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: ShipOrderCommand): Promise<void> {
    console.log(`Order Shipped: ${command.orderId}`);
    this.eventBus.publish(new OrderShippedEvent(command.orderId));
  }
}



@CommandHandler(CancelOrderCommand)
export class CancelOrderHandler implements ICommandHandler<CancelOrderCommand> {
  constructor(
     
    private readonly eventBus: EventBus,
  ) {}

   orders:any = []

  async execute(command: CancelOrderCommand): Promise<void> {
    const { orderId, reason } = command;

    const order = await this.orders.map((order)=>order.orderId =  orderId)
    if (!order) throw new Error('Order not found');

    order.status = 'CANCELLED';
    order.failureReason = reason; // Add this column to Order entity if you haven't

    await this.orders.push(order);

    console.log(`[Command] Order ${orderId} cancelled due to: ${reason}`);

    this.eventBus.publish(new OrderCancelledEvent(orderId, reason));
  }
}


