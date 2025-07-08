export interface paymentProvider{
    processPayment(amount:number):string;
}