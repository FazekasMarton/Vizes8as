import { Inject, Injectable } from '@nestjs/common';
import { Water } from './water.entity';
import { WaterRepository } from './waters.repository';

@Injectable()
export class WatersService {
    constructor(
        @Inject('WATER_REPOSITORY')
        private readonly waterRepository: ReturnType<typeof WaterRepository>,
    ) {}

    getWaters() {
        return this.waterRepository.findAllWater();
    }

    getWaterById(id: number) {
        return this.waterRepository.findWaterById(id);
    }

    createWater(water: Water) {
        return this.waterRepository.createWater(water);
    }

    updateWater(id: number, waterData: Partial<Water>) {
        return this.waterRepository.updateWater(id, waterData);
    }

    deleteWater(id: number) {
        return this.waterRepository.deleteWater(id);
    }
}
