import { Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { PaymentService } from './payment/payment.service';

@Injectable()
export class AppService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getAllPayments() {
    console.time();
    const { PaymentModule } = await import('./payment/payment.module');
    const moduleRef = await this.lazyModuleLoader.load(() => PaymentModule);

    const paymentService = moduleRef.get(PaymentService)
    const allpayments = paymentService.findAll()
    console.timeEnd();

    return allpayments
  }
}
