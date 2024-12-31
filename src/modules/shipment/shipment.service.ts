import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shipment } from './schemas/shipment.entity';
import { CreateShipmentDto } from './dtos/createDto';
import { UpdateShipmentStatusDto } from './dtos/updateDto';

@Injectable()
export class ShipmentsService {
  constructor(
    @InjectRepository(Shipment)
    private readonly shipmentRepository: Repository<Shipment>,
  ) {}

  async createShipment(createShipmentDto: any): Promise<any> {
    const shipment = this.shipmentRepository.create({
      vendor: createShipmentDto.vendorId,
      order: createShipmentDto.orderId,
      orderItem: createShipmentDto.orderItem,
    });
    await this.shipmentRepository.save(shipment);
    return { message: 'Shipment created successfully', shipmentId: shipment.id };
  }

  async updateShipmentStatus(shipmentId: string, updateShipmentStatusDto: UpdateShipmentStatusDto): Promise<any> {
    await this.shipmentRepository.update(shipmentId, updateShipmentStatusDto);
    return { message: 'Shipment status updated successfully' };
  }
}
