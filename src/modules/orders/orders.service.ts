import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './schemas/orders.entity'; 
import { CreateOrderDto } from './dtos/createOrderDto';
import { PaymentsService } from '../payment/payment.service';
import { ShipmentsService } from '../shipment/shipment.service';
import { CustomerService } from '../user/customer.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly paymentService: PaymentsService,
    private readonly shipmentService: ShipmentsService,
    private readonly customerService: CustomerService,
  ) {}

  async placeOrder(createOrderDto: CreateOrderDto): Promise<any> {
    const customer = await this.customerService.findById(createOrderDto.customerId);
    const paymentFromGateWay = {amountToBePaid: createOrderDto.totalAmount} //  after payment
    const payment = await this.paymentService.processPayment(paymentFromGateWay);
    const order = this.orderRepository.create({...createOrderDto, payment });
    const vendors = {}
    createOrderDto.items.forEach(item => {
      if(!vendors[item.vendorId]){
        vendors[item.vendorId] = 0;
      }
      vendors[item.vendorId] += item.price * item.quantity; 
    })
    const promises = []
    Object.keys(vendors).map(item => {
      promises.push(this.paymentService.createTransaction(item, vendors[item]));
      promises.push(this.shipmentService.createShipment({}));
    })
    await Promise.all(promises);
    await this.orderRepository.save(order);
    return { message: 'Order placed successfully', orderId: order.id };
  }

  async getCustomerOrders(customerId: string): Promise<Order[]> {
    return this.orderRepository.find({ where: { customerId } });
  }

  async trackOrder(orderId: string): Promise<any> {
    const order = await this.orderRepository.findOne({ where: { id: orderId }, relations: ['shipments'] });
    return {
      orderId: order.id,
      status: order.status,
      shipments: order.shipments,
    };
  }
}
