import { Injectable } from '@nestjs/common';
import { Saga, ofType, ICommand } from '@nestjs/cqrs';
import { Observable, map } from 'rxjs';
import {
    InventoryReservationFailedEvent,
  InventoryReservedEvent,
  OrderCreatedEvent,
  PaymentProcessedEvent,
} from '../Events/order.events';
import {
    CancelOrderCommand,
  ProcessPaymentCommand,
  ReserveInventoryCommand,
  ShipOrderCommand,
} from '../commands/order.command';


@Injectable()
export class OrderSaga {
  @Saga()
  orderSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(OrderCreatedEvent),
      map((event) => new ProcessPaymentCommand(event.orderId)),
    );
  };

  @Saga()
  paymentSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(PaymentProcessedEvent),
      map((event) => new ReserveInventoryCommand(event.orderId)),
    );
  };

  @Saga()
  inventorySaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(InventoryReservedEvent),
      map((event) => new ShipOrderCommand(event.orderId)),
    );
  };


  @Saga()
inventoryFailureSaga = (events$: Observable<any>): Observable<ICommand> => {
  return events$.pipe(
    ofType(InventoryReservationFailedEvent),
    map(event => {
      console.log(`[Saga] Inventory reservation failed`);
      return new CancelOrderCommand(event.orderId, 'Inventory Unavailable');
    }),
  );
};

  
}
