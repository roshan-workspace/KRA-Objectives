import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ServiceModuleService } from './service_module.service';
import { CreateServiceDto } from './DTO/create-service.dto';
import { UpdateServiceDto } from './DTO/update-service.dto';

@Controller('service')
export class ServiceModuleController {
  constructor(private readonly serviceModuleService: ServiceModuleService) {}

  @Post()
  async create(@Body(ValidationPipe) createDto: CreateServiceDto) {
    const result = await this.serviceModuleService.create(createDto);
    return {
      statusCode: HttpStatus.CREATED,
      error: [],
      data: result,
    };
  }

   @Get("/isActive")
  async isActive(@Query('active', ParseBoolPipe) active: boolean) {
    const result = await this.serviceModuleService.isActive(active);
    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: result,
    };
  }

  @Get()
  async findAll() {
    const result = await this.serviceModuleService.findAll();
    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: result,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.serviceModuleService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateDto: UpdateServiceDto,
  ) {
    const result = await this.serviceModuleService.update(id, updateDto);
    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: result,
    };
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('isActive', ValidationPipe) isActive: boolean,
  ) {
    const result = await this.serviceModuleService.updateStatus(id, isActive);
    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: result,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.serviceModuleService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: null,
    };
  }

  @Get('search/by')
  async search(
    @Query('name') name?: string,
    @Query('serviceType') serviceType?: string,
  ) {
    const result = await this.serviceModuleService.searchByNameOrType(
      name,
      serviceType,
    );
    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: result,
    };
  }

 
}
