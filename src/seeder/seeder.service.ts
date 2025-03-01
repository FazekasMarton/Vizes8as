import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as seedData from '../../seedData.json';
import { Status } from 'src/statuses/status.entity';
import { Type } from 'src/types/type.entity';
import { Water } from 'src/waters/water.entity';

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(
    @InjectRepository(Status) private readonly statusRepository: Repository<Status>,
    @InjectRepository(Type) private readonly typeRepository: Repository<Type>,
    @InjectRepository(Water) private readonly waterRepository: Repository<Water>,
  ) {}

  async onModuleInit() {
    await this.seedStatuses();
    await this.seedTypes();
    await this.seedWaters();
  }

  private async seedStatuses() {
    for (const status of seedData.statuses) {
      const exists = await this.statusRepository.findOne({ where: { id: Number(status.id) } });
      if (!exists) {
        await this.statusRepository.save({ id: Number(status.id), name: status.name });
      }
    }
  }

  private async seedTypes() {
    for (const type of seedData.types) {
      const exists = await this.typeRepository.findOne({ where: { id: Number(type.id) } });
      if (!exists) {
        await this.typeRepository.save({ id: Number(type.id), name: type.name });
      }
    }
  }

  private async seedWaters() {
    for (const water of seedData.waters) {
      const exists = await this.waterRepository.findOne({ where: { id: Number(water.id) } });
      if (!exists) {
        await this.waterRepository.save({
          id: Number(water.id),
          name: water.name,
          description: water.description,
          origin: water.origin,
          vintage: Number(water.vintage),
          volume: Number(water.volume),
          price: Number(water.price),
          discount: Number(water.discount),
          src: water.src,
          typeId: Number(water.typeId),
        });
      }
    }
  }
}
