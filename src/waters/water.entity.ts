import { IsInt, IsNumber, IsString, Min, Max, Length, IsOptional } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from '../types/type.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('waters')
export class Water {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: 'Unique identifier', example: 1 })
    id: number;

    @Column()
    @IsString()
    @Length(1, 255)
    @ApiProperty({ description: 'Name of the water', example: 'Evian' })
    name: string;

    @Column()
    @IsString()
    @Length(0, 1000)
    @ApiProperty({ description: 'Description of the water', example: 'High-quality mineral water.' })
    description: string;

    @ManyToOne(() => Type, type => type.waters)
    @ApiProperty({ description: 'Water type', type: () => Type })
    type: Type;

    @Column()
    @IsString()
    @ApiProperty({ description: 'Origin of the water', example: 'France' })
    origin: string;

    @Column()
    @IsInt()
    @Min(1900)
    @Max(new Date().getFullYear())
    @ApiProperty({ description: 'Vintage year', example: 2023 })
    vintage: number;

    @Column()
    @IsNumber()
    @Min(0.1)
    @ApiProperty({ description: 'Volume in liters', example: 1.5 })
    volume: number;

    @Column()
    @IsNumber()
    @Min(0)
    @ApiProperty({ description: 'Price in USD', example: 2.99 })
    price: number;

    @Column({ default: 0 })
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(100)
    @ApiProperty({ description: 'Discount percentage', example: 10, required: false })
    discount: number;

    @Column()
    @IsString()
    @ApiProperty({ description: 'Image source URL', example: 'water.png' })
    src: string;
}