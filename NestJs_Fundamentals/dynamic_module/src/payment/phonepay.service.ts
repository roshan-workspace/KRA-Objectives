import { Injectable } from "@nestjs/common";
import { paymentProvider } from "./payment.interface";

@Injectable()
export class PhonePayService implements paymentProvider {
    constructor(){}
    processPayment(amount: number): string {
        return `Amount ${amount} is processed through phonepay.`
    }
}