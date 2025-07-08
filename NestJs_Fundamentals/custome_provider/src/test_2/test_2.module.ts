import { Module } from '@nestjs/common';
import { Test2Service } from './test_2.service';
import { Test2Controller } from './test_2.controller';
import { TestModule } from 'src/test/test.module';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  providers: [Test2Service],
  controllers: [Test2Controller],
  imports:[TestModule]
})
export class Test2Module {}
