import { IsArray, ArrayNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  userId: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsString()
  bookIds: string[];
}
