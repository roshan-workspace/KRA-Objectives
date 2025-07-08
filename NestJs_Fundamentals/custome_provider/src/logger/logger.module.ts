import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { ConfigService } from 'src/config/config.service';
import { ConfigModule } from 'src/config/config.module';

export const LOGGER_SERVICE_TOKEN = "LOGGER_SERVICE_TOKEN"
export const TEST_SERVICE_TOKEN = "TEST_SERVICE_TOKEN";

@Module({
  imports:[ConfigModule],
  providers: [
    {
      provide:LOGGER_SERVICE_TOKEN,
      useFactory:(configService:ConfigService)=>{
        const loggerService = new LoggerService();
        const loglevel = configService.getLogLevel()

        console.log(`Logger service initilized with log level: ${loglevel}`);
        return loggerService;
      },
      inject:[ConfigService]
    }
  ],
  exports:[LOGGER_SERVICE_TOKEN]

})
export class LoggerModule {}
