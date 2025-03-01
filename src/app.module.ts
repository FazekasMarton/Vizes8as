import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesModule } from './addresses/addresses.module';
import { BillingsModule } from './billings/billings.module';
import { OrdersBillingsModule } from './orders-billings/orders-billings.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { WatersModule } from './waters/waters.module';
import { StatusesModule } from './statuses/statuses.module';
import { TokensModule } from './tokens/tokens.module';
import { TypesModule } from './types/types.module';
import { Address } from './addresses/address.entity';
import { Billing } from './billings/billing.entity';
import { Item } from './items/item.entity';
import { Order } from './orders/order.entity';
import { OrdersBillings } from './orders-billings/orders-billings.entity';
import { Status } from './statuses/status.entity';
import { Token } from './tokens/token.entity';
import { Type } from './types/type.entity';
import { User } from './users/user.entity';
import { Water } from './waters/water.entity';
import { SeederService } from './seeder/seeder.service';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vizes8as',
      entities: [
        Address,
        Billing,
        Item,
        Order,
        OrdersBillings,
        Status,
        Token,
        Type,
        User,
        Water
      ],
      synchronize: true,
    }),
    AddressesModule,
    BillingsModule,
    OrdersBillingsModule,
    OrdersModule,
    UsersModule,
    ItemsModule,
    WatersModule,
    StatusesModule,
    TokensModule,
    TypesModule,
    SeederModule,
  ],
  providers: [SeederService],
})
export class AppModule { }
