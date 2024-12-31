import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, Index } from 'typeorm';
import { Order } from 'src/modules/orders/schemas/orders.entity';
import { Vendor } from 'src/modules/user/schemas/vendor.entity';
import { PaymentStatus } from '../enum/paymentStatus';
import { PaymentTransaction } from './transaction.entity';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Order, (order) => order.payment)
    order: Order;

    ownerId: string;            // can be for user and for vendors

    @OneToMany(() => PaymentTransaction, (transaction) => transaction.payment)
    transactions: PaymentTransaction[];  // Multiple transactions for the same payment

    @Column()
    amount: number;

    @Column()
    paymentMethod: string; // E.g., Credit Card, PayPal, etc.

    @Column({ default: PaymentStatus.PENDING })
    @Index()
    status: PaymentStatus;

    @Column()
    paymentDate: Date;
}
