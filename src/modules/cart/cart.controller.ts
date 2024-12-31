import { Controller, Post, Get, Put, Delete, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddCartItemDto } from './dtos/addToCart.dto'; 
import { UpdateCartItemDto } from './dtos/updateCart.dto'; 

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':customerId')
  async getCart(@Param('customerId', ParseUUIDPipe) customerId: string) {
    return this.cartService.getCart(customerId);
  }

  @Post(':customerId/add')
  async addItemToCart(
    @Param('customerId', ParseUUIDPipe) customerId: string,
    @Body() addCartItemDto: AddCartItemDto,
  ) {
    return this.cartService.addItemToCart(customerId, addCartItemDto);
  }

  @Put(':customerId/update/:cartItemId')
  async updateCartItem(
    @Param('customerId', ParseUUIDPipe) customerId: string,
    @Param('cartItemId', ParseUUIDPipe) cartItemId: string,
    @Body() updateCartItemDto: UpdateCartItemDto,
  ) {
    return this.cartService.updateCartItem(customerId, cartItemId, updateCartItemDto);
  }

  @Delete(':customerId/remove/:cartItemId')
  async removeItemFromCart(
    @Param('customerId', ParseUUIDPipe) customerId: string,
    @Param('cartItemId', ParseUUIDPipe) cartItemId: string,
  ) {
    return this.cartService.removeItemFromCart(customerId, cartItemId);
  }

  @Delete(':customerId/clear')
  async clearCart(@Param('customerId', ParseUUIDPipe) customerId: string) {
    return this.cartService.clearCart(customerId);
  }
}
