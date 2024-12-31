import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Index, OneToMany } from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  profileImage: string;

  @Column({ unique: true })
  @Index()
  mobile_number: string;

  @Column({ unique: true })
  @Index()
  email: string;

  @OneToMany(() => Address, (address) => address.customer, { cascade: true })
  addresses: Address[];

  @CreateDateColumn()
  created_at: Date;
}
