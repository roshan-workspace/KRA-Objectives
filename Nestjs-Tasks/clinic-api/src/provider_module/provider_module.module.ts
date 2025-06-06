import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Provider } from './entities/provider.entity';
import { CustomProviderRepository } from './Repo/provider.repository';
import { ProviderModuleController } from './provide_module.controller';
import { ProviderModuleService } from './provider_module.service';

@Module({
  imports: [TypeOrmModule.forFeature([Provider])],
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



