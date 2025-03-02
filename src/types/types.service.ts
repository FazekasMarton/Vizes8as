import { Inject, Injectable } from '@nestjs/common';
import { TypesRepository } from './types.reposirory';

@Injectable()
export class TypesService {
    constructor(
        @Inject('TYPES_REPOSITORY')
        private readonly typesRepository: ReturnType<typeof TypesRepository>,
    ) {}

    getTypes() {
        return this.typesRepository.findAllType();
    }
}
