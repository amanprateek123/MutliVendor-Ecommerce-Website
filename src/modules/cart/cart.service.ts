import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './schemas/cart.entity';
import { CartItem } from './schemas/cartItems.entity';
import { AddCartItemDto } from './dtos/addToCart.dto';
import { UpdateCartItemDto } from './dtos/updateCart.dto';
import { Product } from '../products/schemas/product.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
    private readonly productService: ProductsService,
  ) {}

  async getCart(customerId: string) {
    const cart = await this.cartRepository.findOne({
      where: { customer_id: customerId },
      relations: ['items', 'items.product'],
    });
    if (!cart) {
      throw new NotFoundException('Cart not found');
    }
    return cart;
  }

  async addItemToCart(customerId: string, addCartItemDto: AddCartItemDto) {
    let cart = await this.cartRepository.findOne({
      where: { customer_id: customerId },
      relations: ['items'],
    });

    if (!cart) {
      cart = this.cartRepository.create({ customer_id: customerId, items: [] });
      cart = await this.cartRepository.save(cart);
    }

    const product = await this.productService.getProductById(addCartItemDto.productId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const cartItem = this.cartItemRepository.create({
      cart,
      product,
      quantity: addCartItemDto.quantity,
    });

    cart.items.push(await this.cartItemRepository.save(cartItem));
    return this.cartRepository.save(cart);
  }

  async updateCartItem(customerId: string, cartItemId: string, updateCartItemDto: UpdateCartItemDto) {
    const cart = await this.getCart(customerId);
    const cartItem = await this.cartItemRepository.findOne({
      where: { id: cartItemId, cart },
    });
    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }

    cartItem.quantity = updateCartItemDto.quantity;
    return this.cartItemRepository.save(cartItem);
  }

  async removeItemFromCart(customerId: string, cartItemId: string) {
    const cart = await this.getCart(customerId);
    const cartItem = await this.cartItemRepository.findOne({
      where: { id: cartItemId, cart },
    });
    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }

    await this.cartItemRepository.remove(cartItem);
    return { message: 'Cart item removed successfully' };
  }

  async clearCart(customerId: string) {
    const cart = await this.getCart(customerId);
    await this.cartItemRepository.remove(cart.items);
    return { message: 'Cart cleared successfully' };
  }
}
