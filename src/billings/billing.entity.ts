import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Address } from '../addresses/address.entity';

@Entity('billings')
export class Billing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Address, address => address.billings)
    address: Address;

    @Column()
    email: string;

    @Column()
    phone: string;
}
