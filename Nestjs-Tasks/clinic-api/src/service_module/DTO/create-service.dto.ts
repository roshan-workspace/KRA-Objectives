import { IsEnum, IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ServiceType } from '../constants/serviceType.enum';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(ServiceType, {
    message: 'serviceType must be either "hygienist" or "misc"',
  })
  serviceType: ServiceType;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  createdBy: number;
}
