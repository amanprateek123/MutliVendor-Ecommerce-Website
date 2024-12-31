import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from './schemas/vendor.entity';

@Injectable()
export class VendorService {
    constructor(
        @InjectRepository(Vendor)
        private vendorRepository: Repository<Vendor>,
    ) { }

    // Create a new vendor
    async create(createVendorDto: any): Promise<any> {
        const vendor = this.vendorRepository.create(createVendorDto);
        await this.vendorRepository.save(vendor);
        return { message: "Created Successfully" }
    }

    // Get vendor by ID
    async findById(id: string): Promise<Vendor> {
        const vendor = await this.vendorRepository.find({ where: { id } });
        return vendor[0];
    }

    // Update vendor information
    async update(id: string, updateVendorDto: any): Promise<Vendor> {
        await this.vendorRepository.update(id, updateVendorDto);
        return await this.findById(id);
    }

    // List all vendors
    async findAll(): Promise<Vendor[]> {
        return this.vendorRepository.find();
    }

    // Delete a vendor
    async remove(id: string): Promise<void> {
        await this.vendorRepository.delete(id);
    }
}
