import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './schemas/orders.entity';
import { OrderItem } from './schemas/orderItems.entity';
import { PaymentModule } from '../payment/payment.module';
import { ShippmentModule } from '../shipment/shipment.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem]), // Register the Product entity here
    PaymentModule,
    ShippmentModule,
    UserModule
  ],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule { }
