import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  placeOrder(userId: string, bookIds: string[]): Order {
    const total = bookIds.length * 20; 
    const order: Order = {
      id: uuidv4(),
      userId,
      bookIds,
      total,
    };
    this.orders.push(order);
    return order;
  }

  getOrderById(id: string): Order {
    const order = this.orders.find((order) => order.id === id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  getOrdersByUser(userId: string): Order[] {
    return this.orders.filter((order) => order.userId === userId);
  }
}
