import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DataSource } from 'typeorm';
import { UsersRepository } from './users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
    {
      provide: 'USER_REPOSITORY',
      useFactory: (dataSource: DataSource) => UsersRepository(dataSource),
      inject: [DataSource],
    }
  ],
  controllers: [UsersController]
})
export class UsersModule {}
