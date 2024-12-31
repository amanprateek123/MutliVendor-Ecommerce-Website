import { Module } from '@nestjs/common';
import { ShipmentsController } from './shipment.controller';
import { ShipmentsService } from './shipment.service';
import { Shipment } from './schemas/shipment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forFeature([Shipment]), // Register the Product entity here
    ],
  controllers: [ShipmentsController],
  providers: [ShipmentsService],
  exports: [ShipmentsService]
})
export class ShippmentModule {}
