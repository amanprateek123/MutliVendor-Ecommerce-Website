import { IsEnum } from 'class-validator';
import { ShipmentStatus } from '../enum/shipmentStatus';

export class UpdateShipmentStatusDto {
  @IsEnum(ShipmentStatus)
  status: ShipmentStatus;
}
