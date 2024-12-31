import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './schemas/payment.entity';
import { CreatePaymentDto } from './dtos/create.dto';
import { PaymentTransaction } from './schemas/transaction.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    @InjectRepository(PaymentTransaction)
    private readonly paymentTransactionRepository: Repository<PaymentTransaction>,
  ) { }

  async processPayment(createPaymentDto: any): Promise<any> {    //through payment gateway
    const payment = this.paymentRepository.create(createPaymentDto);
    await this.paymentRepository.save(payment);
    return { message: 'Payment processed successfully', paymentId: payment[0].id };
  }

  async createTransaction(vendorId, amount): Promise<any> {    //through payment gateway
    const transaction = this.paymentTransactionRepository.create({
      vendor: vendorId,
      amount,
      transactionDate: new Date()
    })
    await this.paymentTransactionRepository.save(transaction);
  }

  async getPaymentDetails(paymentId: string): Promise<Payment> {
    return this.paymentRepository.findOne({ where: { id: paymentId } });
  }
}
