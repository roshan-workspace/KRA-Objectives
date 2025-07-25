import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [BookModule, UserModule, OrderModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
