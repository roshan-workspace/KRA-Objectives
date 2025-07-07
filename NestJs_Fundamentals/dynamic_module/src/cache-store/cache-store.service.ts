import { Inject, Injectable } from "@nestjs/common";
import { Store } from "./interfaces/store";
import { StoreType } from "./enum/store.enum";
import { STORE_OPTIONS } from "./constant";
import { StoreOptions } from "./interfaces/store-options";
import { FileStore } from "./stores/file.store";
import { MemoryStore } from "./stores/memory.store";


@Injectable()
export class CacheStoreService {
  private STORE: Store;

  public readonly storeName: string;
  public readonly storeType: StoreType;
  public readonly fileLocation: string;

  constructor(@Inject(STORE_OPTIONS) storeOptions: StoreOptions) {
    this.storeName = storeOptions.storeName;
    this.storeType = storeOptions.storeType;
    this.fileLocation = storeOptions?.storeDir;

    this.STORE =
      this.storeType === StoreType.FILE
        ? new FileStore(this.fileLocation, this.storeName)
        : new MemoryStore(this.storeName);
  }

  async getStore() {
    return this.STORE.getStore();
  }

  async set<T>(key: string, value: T) {
    this.STORE.set(key, value);
  }

  async get(key: string) {
    return this.STORE.get(key);
  }

  async del(key: string) {
    this.STORE.del(key);
  }

  async clear() {
    this.STORE.clear();
  }
}