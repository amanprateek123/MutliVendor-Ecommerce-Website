import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { VendorController } from './vendor.controller';
import { CustomerService } from './customer.service';
import { VendorService } from './vendor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './schemas/customer.entity';
import { Vendor } from './schemas/vendor.entity';
import { Address } from './schemas/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Vendor, Address])],
  controllers: [CustomerController, VendorController],
  providers: [CustomerService, VendorService],
  exports: [CustomerService, VendorService],
})
export class UserModule {}
