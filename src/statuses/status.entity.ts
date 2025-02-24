import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../orders/order.entity';

@Entity('statuses')
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Order, order => order.status)
    orders: Order[];
}
