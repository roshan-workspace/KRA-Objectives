// provider-response.dto.ts
import { Expose, Transform, Type } from 'class-transformer';
import { Gender } from '../constants/gender.enum';
import { Service } from 'src/service_module/entities/service.entity';

export class ProviderResponseDto {
  @Expose()
  id: number;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  gender: Gender;

  @Expose()
  @Transform(({ obj }) => obj.services?.map((s: Service) => s.name))
  services: string[];

  @Expose()
  createdBy: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  isActive:Boolean

  @Expose()
  createdByUser:string
}
