import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Water } from '../waters/water.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

@Entity('types')
export class Type {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: 'Unique identifier of the type', example: 1 })
    id: number;

    @Column({ unique: true })
    @ApiProperty({ description: 'Name of the type', example: 'Bottle' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @OneToMany(() => Water, water => water.type)
    waters: Water[];
}