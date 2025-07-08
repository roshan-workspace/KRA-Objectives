import { DynamicModule, Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { PhonePayService } from './phonepay.service';

export type ProviderType = 'stripe' | 'phonepay';

@Module({})
export class PaymentModule {
  static register(providerType: ProviderType): DynamicModule {
    let provider: any;

    if (providerType === 'stripe') {
      provider = StripeService;
    } else if (providerType === 'phonepay') {
      provider = PhonePayService;
    }

    return {
        module: PaymentModule,
        providers:[{
            provide:'PAYMENT_PROVIDER',
            useClass:provider
        }],
        exports:['PAYMENT_PROVIDER']
    }
  }
}
