import { Controller, Get, Inject } from '@nestjs/common';
import { TEST_SERVICE_TOKEN } from 'src/logger/logger.module';
import { TestService } from 'src/test/test.service';

@Controller('test-2')
export class Test2Controller {
    constructor( private readonly testService:TestService){}

        @Get()
        increment(){
            this.testService.increment()
            console.log(this.testService.count);
            return this.testService.count
        }
}
