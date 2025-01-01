import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './schemas/product.entity';
import { Categories } from './schemas/categories.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Categories]), // Register the Product entity here
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService]
})
export class ProductsModule {}
