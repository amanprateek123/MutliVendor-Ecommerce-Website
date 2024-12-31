import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, Index } from 'typeorm';
import { OrderItem } from 'src/modules/orders/schemas/orderItems.entity'; 
import { ShipmentStatus } from '../enum/shipmentStatus';  
import { Order } from 'src/modules/orders/schemas/orders.entity';
import { Vendor } from 'src/modules/user/schemas/vendor.entity';

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, (order) => order.shipments)
  order: Order;

  @ManyToOne(() => Vendor)
  @Index()
  vendor: Vendor;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.shipment)
  orderItem: OrderItem[];

  @Column('uuid')
  @Index()
  trackingNumber: string;

  @Column({ default: ShipmentStatus.PENDING })
  @Index()
  status: ShipmentStatus;

  @Column()
  shipmentDate: Date;

  @Column()
  estimatedDeliveryDate: Date;

  @Column()
  actualDeliveryDate: Date;

  @Column()
  deliveryAddress: string;
}
