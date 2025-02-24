import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Water } from '../waters/water.entity';

@Entity('types')
export class Type {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Water, water => water.type)
    waters: Water[];
}
