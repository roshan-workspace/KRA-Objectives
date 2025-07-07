import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobModule } from './job/job.module';
import { UsersModule } from './users/users.module';
import { CacheStoreModule } from './cache-store/cache-store.module';
import { DynamicModule } from '@nestjs/common';
@Module({
  imports: [JobModule, UsersModule, CacheStoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
