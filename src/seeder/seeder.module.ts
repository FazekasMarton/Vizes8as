import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { Status } from '../statuses/status.entity';
import { Type } from '../types/type.entity';
import { Water } from '../waters/water.entity';
import { StatusesModule } from '../statuses/statuses.module';
import { TypesModule } from '../types/types.module';
import { WatersModule } from '../waters/waters.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Status, Type, Water]),
    StatusesModule,
    TypesModule,
    WatersModule,
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
