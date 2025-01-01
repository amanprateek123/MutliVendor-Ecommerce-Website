import { Vendor } from 'src/modules/user/schemas/vendor.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index()
  category_name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
