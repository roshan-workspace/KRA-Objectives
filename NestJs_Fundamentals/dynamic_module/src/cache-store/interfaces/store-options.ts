import { StoreType } from "../enum/store.enum";

export type StoreOptions = {
  storeName: string;
  storeType: StoreType;
  storeDir: string;
};