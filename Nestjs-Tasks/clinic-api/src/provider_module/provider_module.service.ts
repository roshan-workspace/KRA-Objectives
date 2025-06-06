import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CustomProviderRepository } from './Repo/provider.repository';
import { CreateProviderDto } from './DTO/create-provider.dto';
import { Provider } from './entities/provider.entity';
import { UpdateProviderDto } from './DTO/update-provider.dto';
import { ILike, In } from 'typeorm';
import { CustomServiceRepository } from 'src/service_module/Repo/service.repository';

@Injectable()
export class ProviderModuleService {
  constructor(
    // private readonly serviceRepo: CustomServiceRepository,
    private readonly providerRepo: CustomProviderRepository,
  ) {}

  async create(createProviderDto: CreateProviderDto): Promise<Provider> {
    const { services: serviceIds, ...rest } = createProviderDto;
    const serviceEntities = await this.serviceRepo.findBy({
      id: In(serviceIds),
    });

   if (serviceEntities.length !== serviceIds.length) {
    throw new BadRequestException('Some service IDs are invalid');
  }

    const provider = this.providerRepo.create({...rest,services:serviceEntities});
    return await this.providerRepo.save(provider);
  }

  async findAll(): Promise<Provider[]> {
    // return this.serviceRepo.find();
    return await this.providerRepo.find({
      relations: ['createdByUser'],
    });
  }

  async findOne(id: number): Promise<Provider> {
    const provider = await this.providerRepo.findOne({ where: { id } });
    if (!provider) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return provider;
  }

  async update(id: number, dto: UpdateProviderDto): Promise<Provider> {
    const provider = await this.findOne(id);
    Object.assign(provider, dto);
    return this.providerRepo.save(provider);
  }

  async updateStatus(id: number, isActive: boolean): Promise<Provider> {
    const provider = await this.findOne(id);
    provider.isActive = isActive;
    return this.providerRepo.save(provider);
  }

  async remove(id: number): Promise<void> {
    const provider = await this.findOne(id);
    await this.providerRepo.remove(provider);
  }

  async searchByfirstNameOrlastName(
    firstName?: string,
    lastName?: string,
  ): Promise<Provider[]> {
    const where: any = {};
    if (firstName) {
      where.firstName = ILike(`%${firstName}%`);
    }
    if (lastName) {
      where.lastName = lastName;
    }
    return this.providerRepo.find({ where });
  }

  async isActive(active: boolean): Promise<Provider[]> {
    return this.providerRepo.find({ where: { isActive: active } });
  }
}
