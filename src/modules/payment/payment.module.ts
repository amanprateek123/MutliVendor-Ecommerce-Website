import { Module } from '@nestjs/common';
import { PaymentsController } from './payment.controller';
import { PaymentsService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './schemas/payment.entity';
import { PaymentTransaction } from './schemas/transaction.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([Payment, PaymentTransaction]), // Register the Product entity here
    ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [PaymentsService]
})
export class PaymentModule {}
