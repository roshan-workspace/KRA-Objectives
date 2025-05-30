import { Module } from '@nestjs/common';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
