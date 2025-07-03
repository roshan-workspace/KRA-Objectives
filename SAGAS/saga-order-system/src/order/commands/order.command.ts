export class CreateOrderCommand {
  constructor(public readonly orderId: string) {}
}

export class ProcessPaymentCommand {
  constructor(public readonly orderId: string) {}
}

export class ReserveInventoryCommand {
  constructor(public readonly orderId: string) {}
}

export class ShipOrderCommand {
  constructor(public readonly orderId: string) {}
}

export class CancelOrderCommand {
  constructor(
    public readonly orderId: string,
    public readonly reason: string,
  ) {}
}
