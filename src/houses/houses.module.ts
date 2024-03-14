import { Module } from '@nestjs/common';
import { HousesService } from './houses.service';
import { HousesController } from './houses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from './house.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'House', schema: HouseSchema }]),
  ],
  controllers: [HousesController],
  providers: [HousesService],
})
export class HousesModule {}
