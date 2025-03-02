import { IsInt, IsNumber, IsString, Min, Max, Length, IsOptional } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from '../types/type.entity';

@Entity('waters')
export class Water {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @Length(1, 255)
    name: string;

    @Column()
    @IsString()
    @Length(0, 1000)
    description: string;

    @ManyToOne(() => Type, type => type.waters)
    type: Type;

    @Column()
    @IsString()
    origin: string;

    @Column()
    @IsInt()
    @Min(1900)
    @Max(new Date().getFullYear())
    vintage: number;

    @Column()
    @IsNumber()
    @Min(0.1)
    volume: number;

    @Column()
    @IsNumber()
    @Min(0)
    price: number;

    @Column({default: 0})
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(100)
    discount: number;

    @Column()
    @IsString()
    src: string;
}
