import { Injectable } from "@nestjs/common";
import { paymentProvider } from "./payment.interface";

@Injectable()
export class StripeService implements paymentProvider{
    constructor(){}
    processPayment(amount: number): string {
        return `Amount ${amount} is processed through stripe.`
    }
}