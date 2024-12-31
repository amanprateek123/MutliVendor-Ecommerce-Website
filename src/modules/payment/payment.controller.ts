import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { PaymentsService } from './payment.service'; 
import { CreatePaymentDto } from './dtos/create.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get(':paymentId')
  async getPaymentDetails(@Param('paymentId') paymentId: string) {
    return this.paymentsService.getPaymentDetails(paymentId);
  }
}
