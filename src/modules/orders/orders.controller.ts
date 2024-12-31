import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/createOrderDto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async placeOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.placeOrder(createOrderDto);
  }

  @Get('customer/:customerId')
  async getCustomerOrders(@Param('customerId') customerId: string) {
    return this.ordersService.getCustomerOrders(customerId);
  }

  @Get('orders/:orderId')   // order tracking
  async trackOrder(@Param('orderId') orderId: string) {
    return this.ordersService.trackOrder(orderId);
  }
}
