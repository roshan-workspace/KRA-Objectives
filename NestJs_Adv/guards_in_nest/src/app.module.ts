import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { AppController } from './app.controller';

@Module({
  imports: [BookModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
