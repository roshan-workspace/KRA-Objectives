export class OrderCreatedEvent {
  constructor(public readonly orderId: string) {}
}

export class PaymentProcessedEvent {
  constructor(public readonly orderId: string) {}
}

export class InventoryReservedEvent {
  constructor(public readonly orderId: string) {}
}

export class OrderShippedEvent {
  constructor(public readonly orderId: string) {}
}


export class InventoryReservationFailedEvent {
  constructor(
    public readonly orderId: string,
    public readonly reason: string,
  ) {}
}


export class OrderCancelledEvent {
  constructor(
    public readonly orderId: string,
    public readonly reason: string,
  ) {}
}
