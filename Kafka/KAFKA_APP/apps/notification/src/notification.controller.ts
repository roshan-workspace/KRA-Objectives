import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { MessagePattern, Payload } from '@nestjs/microservices';


@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getHello(): string {
    return this.notificationService.getHello();
  }

   @MessagePattern('order-created')
  sendOrderCreationNotification(@Payload() data:any){
    console.log("[Notification-Service],Notification for Order placed on Email", data);
  }

  @MessagePattern('payment-success')
  paymentSuccessNotificaion(@Payload() data:any){
    console.log("[Notification-Service],Payment successfull", data);
  }
}
