import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Service } from '../entities/service.entity';


@Injectable()
export class CustomServiceRepository extends Repository<Service> {
  constructor(private dataSource: DataSource) {
    super(Service, dataSource.createEntityManager());
  }
}
