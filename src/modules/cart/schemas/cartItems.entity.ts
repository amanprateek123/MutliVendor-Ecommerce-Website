import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm';
import { Cart } from './cart.entity';
import { Product } from 'src/modules/products/schemas/product.entity';

@Entity()
export class CartItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Cart, (cart) => cart.items, { onDelete: 'CASCADE' })
    cart: Cart;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @Index()
    product: Product;

    @Column()
    quantity: number;
}
