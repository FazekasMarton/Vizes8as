import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Billing } from '../billings/billing.entity';

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    postalCode: string;

    @Column()
    street: string;

    @Column()
    house: string;

    @OneToMany(() => Billing, billing => billing.address)
    billings: Billing[];
}
