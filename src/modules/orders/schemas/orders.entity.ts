import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, Index } from 'typeorm';
import { OrderItem } from './orderItems.entity';
import { OrderStatus } from '../enums/order-status';
import { Payment } from 'src/modules/payment/schemas/payment.entity';
import { Shipment } from 'src/modules/shipment/schemas/shipment.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index()
  customerId: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  items: OrderItem[];

  @Column({ default: OrderStatus.PENDING })
  @Index()
  status: OrderStatus;

  @Column()
  totalAmount: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => Shipment, (shipment) => shipment.order)
  shipments: Shipment[]

  @OneToOne(() => Payment, (payment) => payment.order)
  payment: Payment
}
