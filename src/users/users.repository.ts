import { DataSource } from "typeorm";
import { User } from "./user.entity";

export const UsersRepository = (dataSource: DataSource) => {
    const baseRepository = dataSource.getRepository(User);

    return baseRepository.extend({
        async findAllUser() {
            return baseRepository.find();
        },

        async findUserById(id: number) {
            return baseRepository.findOneOrFail({
                where: { id }
            });
        },
    });
};