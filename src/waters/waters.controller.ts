import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
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
    createWater(@Body() water: Water){
        return this.watersService.createWater(water);
    }

    @Put(':id')
    updateWater(@Param('id') id: number, @Body() waterData: Partial<Water>){
        return this.watersService.updateWater(id, waterData);
    }

    @Delete(':id')
    deleteWater(@Param('id') id: number){
        return this.watersService.deleteWater(id);
    }
}