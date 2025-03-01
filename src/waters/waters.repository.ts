import { Water } from './water.entity';
import { DataSource } from 'typeorm';

export const WaterRepository = (dataSource: DataSource) => {
    const baseRepository = dataSource.getRepository(Water);

    return baseRepository.extend({
        async findAllWater() {
            return baseRepository.find();
        },

        async findWaterById(id: number) {
            return baseRepository.findOne({ where: { id } });
        },

        async createWater(water: Water) {
            return baseRepository.save(water);
        },

        async updateWater(id: number, waterData: Partial<Water>) {
            await baseRepository.update(id, waterData);
            return baseRepository.findOne({ where: { id } });
        },

        async deleteWater(id: number) {
            return baseRepository.delete(id);
        },
    });
};
