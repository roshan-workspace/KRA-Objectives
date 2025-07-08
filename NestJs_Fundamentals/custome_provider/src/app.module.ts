import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { TestModule } from './test/test.module';
import { Test2Module } from './test_2/test_2.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [LoggerModule, TestModule, Test2Module, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
