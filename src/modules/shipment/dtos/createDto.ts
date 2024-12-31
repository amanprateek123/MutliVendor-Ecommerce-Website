import { IsString, IsArray, IsDateString, IsOptional } from 'class-validator';

export class CreateShipmentDto {
  
  @IsString()
  vendorId: string

  @IsArray()
  orderItemIds: string[];

  @IsString()
  trackingNumber: string;

  @IsDateString()
  shipmentDate: string;

  @IsDateString()
  estimatedDeliveryDate: string;

  @IsOptional()
  @IsDateString()
  actualDeliveryDate?: string;

  @IsString()
  deliveryAddress: string;
}
