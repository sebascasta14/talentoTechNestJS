import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HousesService } from './houses.service';
import { House } from './houses.entity';
import { CreateHouseDto } from './dto/create-house.dto';

@Controller('houses')
export class HousesController {
  constructor(private readonly housesService: HousesService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createHouseDto: CreateHouseDto): Promise<House> {
    return this.housesService.create(createHouseDto);
  }

  @Get()
  async findAll(): Promise<House[]> {
    return this.housesService.findAll();
  }

  @Get(':code')
  async findByCode(@Param('code') code: string): Promise<House> {
    return this.housesService.findByCode(code);
  }

  @Put(':code')
  async update(
    @Param('code') code: string,
    @Body() updateHouse: CreateHouseDto,
  ): Promise<House> {
    return this.housesService.update(code, updateHouse);
  }

  @Delete(':code')
  async delete(@Param('code') code: string): Promise<boolean> {
    return this.housesService.delete(code);
  }
}
