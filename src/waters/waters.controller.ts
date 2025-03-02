import { Controller, Get, Post, Delete, Param, Body, Patch, Headers } from '@nestjs/common';
import { WatersService } from './waters.service';
import { Water } from './water.entity';

@Controller('waters')
export class WatersController {
    constructor(private readonly watersService: WatersService) {}

    @Get()
    getWaters(): Promise<Water[]> {
        return this.watersService.getWaters();
    }

    @Get(':id')
    getWaterById(@Param('id') id: number){
        return this.watersService.getWaterById(id);
    }

    @Post()
    createWater(@Headers('authorization') authHeader: string, @Body() water: Water){
        return this.watersService.createWater(water, authHeader);
    }

    @Patch(':id')
    updateWater(@Headers('authorization') authHeader: string, @Param('id') id: number, @Body() waterData: Partial<Water>){
        return this.watersService.updateWater(id, waterData, authHeader);
    }

    @Delete(':id')
    deleteWater(@Headers('authorization') authHeader: string, @Param('id') id: number){
        return this.watersService.deleteWater(id, authHeader);
    }
}