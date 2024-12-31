import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto, UpdateProductDto } from './dtos/products.dto';
import { Product } from './schemas/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) { }

  async addProduct(createProductDto: CreateProductDto): Promise<any> {
    const product = this.productRepository.create(createProductDto);
    await this.productRepository.save(product);
    return { message: 'Product added successfully', productId: product.id };
  }

  async updateProduct(productId: string, updateProductDto: UpdateProductDto): Promise<any> {
    await this.productRepository.update(productId, updateProductDto);
    return { message: 'Product updated successfully' };
  }

  async getProductById(productId: string): Promise<any> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: ['vendors']
    });
    return product;
  }

  async findAllProducts(filters?: any): Promise<Product[]> {
    const query = this.productRepository.createQueryBuilder('product');

    if (filters?.category) {
      query.andWhere('product.category = :category', { category: filters.category });
    }

    if (filters?.vendorId) {
      query.andWhere('vendor.id = :vendorId', { vendorId: filters.vendorId });
    }

    query.leftJoinAndSelect('product.vendors', 'vendor');
    return query.getMany();
  }


  //   async getProductsByVendor(vendorId: string): Promise<Product[]> {
  //     return this.productRepository.find({ where: { vendors:  } });
  //   }
}

