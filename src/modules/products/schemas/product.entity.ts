import { Vendor } from 'src/modules/user/schemas/vendor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { Categories } from './categories.entity';

@Entity()
@Index(["name", "created_at"])
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column('decimal', { nullable: true })
  discount: number;

  @Column('simple-array', { nullable: true })
  image: string[];

  @ManyToOne(() => Categories, (category) => category.products)
  @Index()
  category: Categories;

  @ManyToMany(() => Vendor, (vendor) => vendor.products)
  @JoinTable()
  vendors: Vendor[];

  @Column('decimal', { nullable: true, default: 0 })
  rating: number;

  @Column()
  stock: number;

  @Column()
  created_by: string;       // can have this to track who created first this product

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
