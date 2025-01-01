import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsOptional()
  @IsArray()
  image?: string[];

  category: any;

  @IsString()
  created_by: string;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsOptional()
  @IsArray()
  image?: string[];

  @IsOptional()
  category?: any;
}

