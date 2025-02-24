
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from '../types/type.entity';

@Entity('waters')
export class Water {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => Type, type => type.waters)
    type: Type;

    @Column()
    origin: string;

    @Column()
    volume: number;

    @Column()
    price: number;

    @Column()
    discount: number;

    @Column()
    src: string;
}
