import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm';
import { Order } from './orders.entity';
import { Product } from 'src/modules/products/schemas/product.entity';
import { Vendor } from 'src/modules/user/schemas/vendor.entity';
import { Shipment } from 'src/modules/shipment/schemas/shipment.entity';

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Order, (order) => order.items)
    @Index()
    order: Order;

    @ManyToOne(() => Product)
    product: Product;

    @ManyToOne(() => Vendor)
    @Index()
    vendor: Vendor;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    totalPrice: number;

    @ManyToOne(() => Shipment, (shipment) => shipment.orderItem)
    shipment: Shipment;
}
