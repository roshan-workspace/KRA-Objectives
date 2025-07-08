import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()
    // ,PaymentModule.register('stripe')],
    ,PaymentModule.register(process.env.PAYMENT_PROVIDER as 'stripe' | 'phonepay')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
