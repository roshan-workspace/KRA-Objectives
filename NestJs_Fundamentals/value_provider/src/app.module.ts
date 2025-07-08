import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config.service';
import { CONFIG_OPTION, configValue } from './config-constants';






@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    
    {
      provide: CONFIG_OPTION,
      useValue: configValue,
    },
    
    ConfigService,
  ],
})
export class AppModule {}
