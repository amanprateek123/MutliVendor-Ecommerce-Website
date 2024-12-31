import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './schemas/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  // Create a new customer
  async create(createCustomerDto: any): Promise<Customer> {
    const customer = this.customerRepository.create(createCustomerDto);
    const data = await this.customerRepository.save(customer);
    return data[0];
  }

  // Get customer by ID
  async findById(id: string): Promise<Customer> {
    const customer = await this.customerRepository.find({where: {id}});
    return customer[0];
  }

  // Update customer information
  async update(id: string, updateCustomerDto: any): Promise<Customer> {
    await this.customerRepository.update(id, updateCustomerDto);
    return this.findById(id);
  }

  // List all customers
  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  // Delete a customer
  async remove(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
