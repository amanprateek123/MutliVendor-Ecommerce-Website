import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async addProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.addProduct(createProductDto);
  }

  @Post(':productId')
  async updateProduct(@Param('productId') productId: string, @Body() updateProductDto: UpdateProductDto) {
    return await this.productsService.updateProduct(productId, updateProductDto);
  }

  @Get()
  async getAllProducts(@Query() filters: any) {
    return await this.productsService.findAllProducts(filters);
  }

  @Get('/:id')
  async getProductDetails(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }


  // @Get('/vendor/:vendorId')
  // async getProductsByVendor(@Param('vendorId') vendorId: string) {
  //   return this.productsService.getProductsByVendor(vendorId);
  // }
}
