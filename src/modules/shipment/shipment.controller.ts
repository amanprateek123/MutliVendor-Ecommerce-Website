import { Controller, Post, Put, Body, Param } from '@nestjs/common';
import { ShipmentsService } from './shipment.service';
import { CreateShipmentDto } from './dtos/createDto';
import { UpdateShipmentStatusDto } from './dtos/updateDto';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  // @Post()
  // async createShipment(@Body() createShipmentDto: CreateShipmentDto) {
  //   return this.shipmentsService.createShipment(createShipmentDto);
  // }

  @Put(':shipmentId/status')
  async updateShipmentStatus(@Param('shipmentId') shipmentId: string, @Body() updateShipmentStatusDto: UpdateShipmentStatusDto) {
    return this.shipmentsService.updateShipmentStatus(shipmentId, updateShipmentStatusDto);
  }
}
