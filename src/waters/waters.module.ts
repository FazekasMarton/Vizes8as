import { Module } from '@nestjs/common';
import { WatersService } from './waters.service';
import { WatersController } from './waters.controller';

@Module({
  providers: [WatersService],
  controllers: [WatersController]
})
export class WatersModule {}
