import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule, BooksModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
  
})
export class ApiGatewayModule {}
