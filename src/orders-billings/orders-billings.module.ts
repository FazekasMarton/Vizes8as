import { Module } from '@nestjs/common';
import { OrdersBillingsService } from './orders-billings.service';
import { OrdersBillingsController } from './orders-billings.controller';

@Module({
  providers: [OrdersBillingsService],
  controllers: [OrdersBillingsController]
})
export class OrdersBillingsModule {}
