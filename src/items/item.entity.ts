import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from '../orders/order.entity';
import { Water } from '../waters/water.entity';

@Entity('items')
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Water)
    product: Water;

    @ManyToOne(() => Order, order => order.items)
    order: Order;

    @Column()
    quantity: number;
}
