import { Controller, Get, Post, Delete, Param, Body, Patch, Headers, ParseIntPipe } from '@nestjs/common';
import { WatersService } from './waters.service';
import { Water } from './water.entity';
import { ApiTags, ApiOperation, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('waters')
@Controller('waters')
export class WatersController {
    constructor(private readonly watersService: WatersService) {}

    @Get()
    @ApiOperation({ summary: 'Retrieve all waters' })
    @ApiResponse({ status: 200, description: 'Successful retrieval', type: [Water] })
    getWaters(): Promise<Water[]> {
        return this.watersService.getWaters();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieve a specific water by ID' })
    @ApiParam({ name: 'id', type: 'number', description: 'Unique identifier of the water' })
    @ApiResponse({ status: 200, description: 'Successful retrieval', type: Water })
    getWaterById(@Param('id', ParseIntPipe) id: number) {
        return this.watersService.getWaterById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new water record' })
    @ApiBody({ type: Water, description: 'Water record to be created' })
    @ApiResponse({ status: 201, description: 'Successfully created', type: Water })
    createWater(@Headers('authorization') authHeader: string, @Body() water: Water) {
        return this.watersService.createWater(water, authHeader);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update water record' })
    @ApiParam({ name: 'id', type: 'number', description: 'Unique identifier of the water' })
    @ApiResponse({ status: 200, description: 'Successfully updated', type: Water })
    updateWater(
        @Headers('authorization') authHeader: string,
        @Param('id', ParseIntPipe) id: number,
        @Body() waterData: Partial<Water>
    ) {
        return this.watersService.updateWater(id, waterData, authHeader);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete water record' })
    @ApiParam({ name: 'id', type: 'number', description: 'Unique identifier of the water' })
    @ApiResponse({ status: 200, description: 'Successfully deleted' })
    deleteWater(@Headers('authorization') authHeader: string, @Param('id', ParseIntPipe) id: number) {
        return this.watersService.deleteWater(id, authHeader);
    }
}