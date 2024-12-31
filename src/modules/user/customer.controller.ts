import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service'; 

@Controller('users')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  // Create a new customer
  @Post()
  async create(@Body() createCustomerDto: any) {
    return this.customerService.create(createCustomerDto);
  }

  // Get customer details
  @Get('/:id')
  async getCustomer(@Param('id') id: string) {
    return this.customerService.findById(id);
  }

  // Update customer information
  @Put('/:id')
  async updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: any) {
    return this.customerService.update(id, updateCustomerDto);
  }

  // Get all customers
  @Get()
  async getAllCustomers() {
    return this.customerService.findAll();
  }

  // Delete a customer
  @Delete('/:id')
  async deleteCustomer(@Param('id') id: string) {
    return this.customerService.remove(id);
  }
}
