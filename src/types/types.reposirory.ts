import { Type } from "./type.entity";
import { DataSource } from "typeorm";

export const TypesRepository = (dataSource: DataSource) => {
    const baseRepository = dataSource.getRepository(Type);

    return baseRepository.extend({
        async findAllType() {
            return baseRepository.find();
        }
    });
}