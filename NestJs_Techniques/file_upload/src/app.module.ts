import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadController } from './upload/upload.controller';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
