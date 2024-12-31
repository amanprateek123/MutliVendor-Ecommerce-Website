import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './schemas/cart.entity';
import { CartItem } from './schemas/cartItems.entity';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart, CartItem]),
    ProductsModule
  ],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule { }
