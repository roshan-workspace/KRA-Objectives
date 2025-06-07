import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Provider } from './entities/provider.entity';
import { CustomProviderRepository } from './Repo/provider.repository';
import { ProviderModuleController } from './provide_module.controller';
import { ProviderModuleService } from './provider_module.service';
import { CustomServiceRepository } from 'src/service_module/Repo/service.repository';
import { ServiceModuleModule } from 'src/service_module/service_module.module';

@Module({
  imports: [ServiceModuleModule,TypeOrmModule.forFeature([Provider])],
  controllers: [ProviderModuleController],
  providers: [
    {
      provide: CustomProviderRepository,
      useFactory: (dataSource: DataSource) =>
        new CustomProviderRepository(dataSource),
      inject: [DataSource],
    },
    ProviderModuleService,
  ],
  exports:[ProviderModuleService]
})

export class ProviderModuleModule {}



