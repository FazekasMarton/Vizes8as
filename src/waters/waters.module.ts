import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Water } from './water.entity';
import { WatersController } from './waters.controller';
import { WatersService } from './waters.service';
import { DataSource } from 'typeorm';
import { WaterRepository } from './waters.repository';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [TypeOrmModule.forFeature([Water]), UsersModule],
  controllers: [WatersController],
  providers: [
    WatersService,
    {
      provide: 'WATER_REPOSITORY',
      useFactory: (dataSource: DataSource) => WaterRepository(dataSource),
      inject: [DataSource],
    },
  ],
  exports: [TypeOrmModule],
})
export class WatersModule {}
