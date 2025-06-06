import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Provider } from '../entities/provider.entity';


@Injectable()
export class CustomProviderRepository extends Repository<Provider> {
  constructor(private dataSource: DataSource) {
    super(Provider, dataSource.createEntityManager());
  }
}
