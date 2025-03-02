import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Water } from './water.entity';
import { WaterRepository } from './waters.repository';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class WatersService {
    constructor(
        @Inject('WATER_REPOSITORY')
        private readonly waterRepository: ReturnType<typeof WaterRepository>,
        private readonly usersService: UsersService
    ) {}

    getWaters() {
        return this.waterRepository.findAllWater();
    }

    getWaterById(id: number) {
        return this.waterRepository.findWaterById(id);
    }

    createWater(water: Water, authHeader: string) {
        if(!this.usersService.users.get(authHeader)?.isAdmin) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.waterRepository.createWater(water);
    }

    updateWater(id: number, waterData: Partial<Water>, authHeader: string) {
        if(!this.usersService.users.get(authHeader)?.isAdmin) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.waterRepository.updateWater(id, waterData);
    }

    deleteWater(id: number, authHeader: string) {
        if(!this.usersService.users.get(authHeader)?.isAdmin) {
            throw new UnauthorizedException('Unauthorized');
        }
        return this.waterRepository.deleteWater(id);
    }
}
