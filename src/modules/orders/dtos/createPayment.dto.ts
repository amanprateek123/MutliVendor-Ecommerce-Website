import { IsString, IsNumber, IsEnum } from 'class-validator';


enum PaymentStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
}


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
