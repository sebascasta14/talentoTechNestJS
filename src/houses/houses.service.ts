import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { House } from './houses.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHouseDto } from './dto/create-house.dto';

@Injectable()
export class HousesService {
  constructor(
    @InjectModel('House') private readonly houseModel: Model<House>,
  ) {}

  async create(createHouseDto: CreateHouseDto): Promise<House> {
    const newHouse = new this.houseModel({ ...createHouseDto });
    return newHouse.save();
  }

  async findAll(): Promise<House[]> {
    return this.houseModel.find();
  }

  async findByCode(code: string): Promise<House | null> {
    try {
      return await this.houseModel.findOne({ code });
    } catch (error) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }
  }

  async update(code: string, houseDto: CreateHouseDto): Promise<House> {
    try {
      return await this.houseModel.findOneAndUpdate({ code }, houseDto, {
        new: true,
      });
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async delete(code: string): Promise<boolean> {
    try {
      const house = await this.houseModel.findOneAndDelete({ code });
      if (!house) {
        throw new NotFoundException('User not found');
      }
      return true;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
}
