import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CustomProviderRepository } from './Repo/provider.repository';
import { CreateProviderDto } from './DTO/create-provider.dto';
import { Provider } from './entities/provider.entity';
import { UpdateProviderDto } from './DTO/update-provider.dto';
import { ILike, In } from 'typeorm';
import { CustomServiceRepository } from 'src/service_module/Repo/service.repository';
import { ProviderResponseDto } from './DTO/provider-response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ProviderModuleService {
  constructor(
    private readonly serviceRepo: CustomServiceRepository,
    private readonly providerRepo: CustomProviderRepository,
  ) {}

  async create(dto: CreateProviderDto): Promise<any> {
    const services = await this.serviceRepo.findBy({
      id: In(dto.services),
    });

    if (services.length !== dto.services.length) {
      throw new BadRequestException('Some service IDs are invalid');
    }

    const provider = this.providerRepo.create({
      ...dto,
      services,
    });
    const saved = await this.providerRepo.save(provider);

    const populated = await this.providerRepo.findOne({
      where: { id: saved.id },
      relations: ['createdByUser', 'services'],
    });

    if (!populated) {
      throw new NotFoundException(`Provider not found after creation`);
    }
    return {
      id: populated.id,
      firstName: populated.firstName,
      lastName: populated.lastName,
      gender: populated.gender,
      isActive: populated.isActive,
      createdBy: populated.createdByUser?.firstName || 'Unknown',
      services: populated.services.map((s) => s.name),
    };
  }

  //  async update(id: number, dto: UpdateServiceDto): Promise<Service> {
  //     const service = await this.findOne(id);
  //     Object.assign(service, dto);
  //     return this.serviceRepo.save(service);
  //   }

  async update(id: number, dto: UpdateProviderDto): Promise<any> {
    const provider = await this.providerRepo.findOne({ where: { id } });
    if (!provider) {
      throw new NotFoundException(`Provider with ID ${id} not found`);
    }
    Object.assign(provider, dto);
    await this.providerRepo.save(provider);

    const populated = await this.providerRepo.findOne({
    where: { id },
    relations: ['createdByUser', 'services'],
  });

  if (!populated) {
    throw new NotFoundException('Provider not found after update.');
  }

  // Step 6: Return formatted response
  return {
    id: populated.id,
    firstName: populated.firstName,
    lastName: populated.lastName,
    gender: populated.gender,
    isActive: populated.isActive,
    createdBy: populated.createdByUser?.firstName ?? 'Unknown',
    services: populated.services.map((s) => s.name),
  };


  }

  async findAll(): Promise<ProviderResponseDto[]> {
    const providers = await this.providerRepo.find({ relations: ['services'] });

    return plainToInstance(ProviderResponseDto, providers, {
      excludeExtraneousValues: true,
    });
  }

  async findById(id: number): Promise<ProviderResponseDto> {
    const provider = await this.providerRepo.findOne({
      where: { id },
      relations: ['services'],
    });
    if (!provider) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }

    // return provider;
    return plainToInstance(ProviderResponseDto, provider, {
      excludeExtraneousValues: true,
    });
  }

  async updateStatus(id: number, isActive: boolean): Promise<any> {
    console.log('isActive: ', isActive);
    if (typeof isActive !== 'boolean') {
      throw new BadRequestException(`'isActive' must be a boolean value`);
    }
    const provider = await this.providerRepo.findOne({ where: { id } });
    if (!provider) {
      throw new NotFoundException(`Provider with ID ${id} not found`);
    }
    provider.isActive = isActive;
    console.log('provider: ', provider);
    await this.providerRepo.save(provider);

    const updated = await this.providerRepo.findOne({
      where: { id },
      relations: ['createdByUser', 'services'],
    });

    // Format for response (DTO-like)

    if (!updated) {
      throw new NotFoundException(`Provider not found after status change`);
    }
    return {
      id: updated.id,
      firstName: updated.firstName,
      lastName: updated.lastName,
      gender: updated.gender,
      isActive: updated.isActive,
      createdBy: updated.createdByUser?.firstName || 'Unknown',
      services: updated.services.map((s) => s.name),
    };
  }

  async remove(id: number): Promise<Provider> {
    const provider = await this.providerRepo.findOne({ where: { id } });
    if (!provider) {
      throw new NotFoundException(`Provider with ID ${id} not found`);
    }

    await this.providerRepo.remove(provider);
    return provider;
  }

  async searchByfirstNameOrlastName(
    firstName?: string,
    lastName?: string,
  ): Promise<any[]> {
    const where: any = {};
    if (firstName) {
      where.firstName = ILike(`%${firstName}%`);
    }
    if (lastName) {
      where.lastName =  ILike(`%${lastName}`);
    }
    const provider = await this.providerRepo.find({
      where,
      relations: ['services'],
    });

    return plainToInstance(ProviderResponseDto, provider, {
      excludeExtraneousValues: true,
    });
  }

  async isActive(active: boolean): Promise<Provider[]> {
    return this.providerRepo.find({ where: { isActive: active } });
  }
}
