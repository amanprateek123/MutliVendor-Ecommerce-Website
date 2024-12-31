import { IsString, IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsString()
  vendorId: string;
}

export class CreateOrderDto {
  @IsString()
  customerId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsNumber()
  totalAmount: number;
}
