import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';
import { UserModule } from './modules/user/user.module';
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentModule } from './modules/payment/payment.module';
import { ShippmentModule } from './modules/shipment/shipment.module';

@Module({
  imports: [
    // ConfigModule to handle environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Make the configuration globally accessible
    }),

    // TypeORM configuration
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'amanprateek'),
        password: configService.get<string>('DB_PASSWORD', 'password'),
        database: configService.get<string>('DB_NAME', 'multi_vendor_ecommerce'),
        autoLoadEntities: true, // Automatically load entities
        synchronize: true, // For development purposes only
        logging: true, // Enable query logging
      }),
    }),

    // Feature modules
    ProductsModule,
    UserModule,
    CartModule,
    OrdersModule,
    PaymentModule,
    ShippmentModule,
  ],
  providers: [],
})
export class AppModule { }
