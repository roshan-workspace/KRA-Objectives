import { Controller } from '@nestjs/common';
import { CacheStoreService } from './cache-store.service';

@Controller('cache-store')
export class CacheStoreController {
  constructor(private readonly cacheStoreService: CacheStoreService) {}
}
