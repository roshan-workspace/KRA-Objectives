import { Injectable } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';

@Injectable()
export class AppService {
  constructor(private discoverableModule:DiscoveryModule){
    
  }
  getHello(): string {
    return 'Hello World!';
  }
}
