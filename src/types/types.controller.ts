import { Controller, Get } from '@nestjs/common';
import { TypesService } from './types.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Type } from './type.entity';

@ApiTags('types')
@Controller('types')
export class TypesController {
    constructor(
        private readonly typesService: TypesService,
    ) {}

    @Get()
    @ApiOperation({ summary: 'Retrieve all types' })
    @ApiResponse({ status: 200, description: 'Successful retrieval', type: [Type] })
    getTypes() {
        return this.typesService.getTypes();
    }
}