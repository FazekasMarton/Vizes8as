import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './type.entity';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import { DataSource } from 'typeorm';
import { TypesRepository } from './types.reposirory';

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  controllers: [TypesController],
  providers: [
    TypesService,
    {
      provide: 'TYPES_REPOSITORY',
      useFactory: (dataSource: DataSource) => TypesRepository(dataSource),
      inject: [DataSource],
    }
  ],
  exports: [TypeOrmModule],
})
export class TypesModule { }
