import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "./payment.entity";
import { Vendor } from "src/modules/user/schemas/vendor.entity";
import { PaymentStatus } from "../enum/paymentStatus";

@Entity()
export class PaymentTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Payment, (payment) => payment.transactions)
  payment: Payment;  // Each transaction is part of a larger payment

  @ManyToOne(() => Vendor, (vendor) => vendor.id)
  vendor: Vendor;  // Transaction is for a particular vendor

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;  // Amount paid for the vendor's products in this transaction

  @Column({ default: PaymentStatus.PENDING })
  @Index()
  status: PaymentStatus;  // Transaction status

  @Column()
  transactionDate: Date;  // Date of transaction
}
