import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomServiceRepository } from './Repo/service.repository';
import { CreateServiceDto } from './DTO/create-service.dto';
import { Service } from './entities/service.entity';
import { UpdateServiceDto } from './DTO/update-service.dto';
import { ILike } from 'typeorm';

@Injectable()
export class ServiceModuleService {
  constructor(private readonly serviceRepo: CustomServiceRepository) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const service = this.serviceRepo.create(createServiceDto);
    return await this.serviceRepo.save(service);
  }

  async findAll(): Promise<Service[]> {
    return this.serviceRepo.find();
  //    return await this.serviceRepo.find({
  //   relations: ['createdByUser'],
  // });
  }

  async findOne(id: number): Promise<Service> {
    const service = await this.serviceRepo.findOne({ where: { id } });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  async update(id: number, dto: UpdateServiceDto): Promise<Service> {
    const service = await this.findOne(id);
    Object.assign(service, dto);
    return this.serviceRepo.save(service);
  }

  async updateStatus(id: number, isActive: boolean): Promise<Service> {
    const service = await this.findOne(id);
    service.isActive = isActive;
    return this.serviceRepo.save(service);
  }

  async remove(id: number): Promise<void> {
    const service = await this.findOne(id);
    await this.serviceRepo.remove(service);
  }


   async searchByNameOrType(name?: string, serviceType?: string): Promise<Service[]> {
    const where: any = {};
    if (name) {
      where.name = ILike(`%${name}%`);
    }
    if (serviceType) {
      where.serviceType = serviceType;
    }
    return this.serviceRepo.find({ where });
  }

  async isActive(active:boolean): Promise<Service[]> {
    return this.serviceRepo.find({where:{isActive:active}})
  }
}
