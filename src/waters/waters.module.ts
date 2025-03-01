import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Water } from './water.entity';
import { WatersController } from './waters.controller';
import { WatersService } from './waters.service';


@Module({
  imports: [TypeOrmModule.forFeature([Water])],
  controllers: [WatersController],
  providers: [WatersService],
  exports: [TypeOrmModule],
})
export class WatersModule {}
