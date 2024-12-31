import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VendorService } from './vendor.service';

@Controller('vendors')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  // Create a new vendor
  @Post()
  async create(@Body() createVendorDto: any) {
    return this.vendorService.create(createVendorDto);
  }

  // Get vendor details
  @Get('/:id')
  async getVendor(@Param('id') id: string) {
    return this.vendorService.findById(id);
  }

  // Update vendor information
  @Put('/:id')
  async updateVendor(@Param('id') id: string, @Body() updateVendorDto: any) {
    return this.vendorService.update(id, updateVendorDto);
  }

  // Get all vendors
  @Get()
  async getAllVendors() {
    return this.vendorService.findAll();
  }

  // Delete a vendor
  @Delete('/:id')
  async deleteVendor(@Param('id') id: string) {
    return this.vendorService.remove(id);
  }
}
