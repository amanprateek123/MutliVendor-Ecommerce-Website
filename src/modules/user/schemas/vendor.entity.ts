import { Product } from 'src/modules/products/schemas/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index()
  vendor_name: string;

  @Column()
  owner_name: string;

  @Column({ unique: true })
  @Index()
  mobile_number: string;

  @Column({ unique: true })
  @Index()
  email: string;

  @Column()
  shop_name: string;

  @Column({ nullable: true })
  shop_logo: string;

  @Column()
  address: string;

  @ManyToMany(() => Product, (product) => product.vendors)
  products: Product[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
