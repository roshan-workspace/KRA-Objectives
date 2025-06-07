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
import { ProviderModuleService } from './provider_module.service';
import { CreateProviderDto } from './DTO/create-provider.dto';
import { UpdateProviderDto } from './DTO/update-provider.dto';

@Controller("provider")
export class ProviderModuleController {
  constructor(private readonly providerModuleService: ProviderModuleService) {}


  @Post()
  async create(@Body(ValidationPipe) createDto: CreateProviderDto) {
    const result = await this.providerModuleService.create(createDto);
    return {
      statusCode: HttpStatus.CREATED,
      error: [],
      data: result
    };
  }

  @Get('/isActive')
  async isActive(@Query('active', ParseBoolPipe) active: boolean) {
    const result = await this.providerModuleService.isActive(active);
    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: result,
    };
  }

 

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.providerModuleService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateDto: UpdateProviderDto,
  ) {
    const result = await this.providerModuleService.update(id, updateDto);
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
    const result = await this.providerModuleService.updateStatus(id, isActive);
    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: result,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.providerModuleService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: null,
    };
  }

  @Get('search/by')
  async search(
    @Query('firstName') firstName?: string,
    @Query('lastName') lastName?: string,
  ) {
    const result = await this.providerModuleService.searchByfirstNameOrlastName(
      firstName,
      lastName,
    );
    console.log('firstName: ', firstName);
    console.log('lastName: ', lastName);

    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: result,
    };
  }

   @Get()
  async findAll() {
    const result = await this.providerModuleService.findAll();
    return {
      statusCode: HttpStatus.OK,
      error: [],
      data: result,
    };
  }
}
