import { Module } from '@nestjs/common';
import { CacheStoreService } from './cache-store.service';
import { CacheStoreController } from './cache-store.controller';
import { STORE_OPTIONS } from './constant';
import { StoreType } from './enum/store.enum';


const DEFAULT_STORE_NAME = 'DEFAULT_CACHE'

const DEFAULT_STORE_TYPE = StoreType.MEMORY;
@Module({
  
  controllers: [CacheStoreController],
  providers: [CacheStoreService, {
    provide:STORE_OPTIONS,
    useValue:{
      storeName:DEFAULT_STORE_NAME,
      StoreType:DEFAULT_STORE_TYPE
    }
  }],
})
export class CacheStoreModule {}
