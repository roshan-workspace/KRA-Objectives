import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { InventoryModule } from './inventory/inventory.module';
import { ShippingModule } from './shipping/shipping.module';
import { SagaModule } from './saga/saga.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    CqrsModule,
    OrderModule,
    PaymentModule,
    InventoryModule,
    ShippingModule,
    SagaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
