import { Inject, Injectable, Provider } from '@nestjs/common';
import { paymentProvider } from './payment/payment.interface';

@Injectable()
export class AppService {

  constructor(
   @Inject('PAYMENT_PROVIDER') private readonly providerService:paymentProvider ){}

  getHello(): string {
    return 'Hello World!';
  }


  processPayment(amount:number){
     const res = this.providerService.processPayment(amount)
     return res

  }
}
