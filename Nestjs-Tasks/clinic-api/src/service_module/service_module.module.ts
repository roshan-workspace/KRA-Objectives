import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { ServiceModuleController } from './service_module.controller';
import { CustomServiceRepository } from './Repo/service.repository';
import { DataSource } from 'typeorm';
import { ServiceModuleService } from './service_module.service'

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  controllers: [ServiceModuleController],
  providers: [
    {
      provide: CustomServiceRepository,
      useFactory: (dataSource: DataSource) =>
        new CustomServiceRepository(dataSource),
      inject: [DataSource],
    },
    ServiceModuleService,
  ],
  exports:[ServiceModuleService]
})

export class ServiceModuleModule {}



