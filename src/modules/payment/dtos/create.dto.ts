import { IsString, IsNumber, IsEnum } from 'class-validator';
import { PaymentStatus } from '../enum/paymentStatus';

export class CreatePaymentDto {
  @IsString()
  orderId: string;

  @IsString()
  ownerId: string;

  @IsNumber()
  amount: number;

  @IsString()
  paymentMethod: string; // Example: "Credit Card", "PayPal"

  @IsEnum(PaymentStatus)
  status: PaymentStatus;
}
