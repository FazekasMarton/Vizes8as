import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Status } from '../statuses/status.entity';
import { Item } from '../items/item.entity';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @ManyToOne(() => Status, status => status.orders)
    status: Status;

    @Column()
    date: Date;

    @OneToMany(() => Item, item => item.order)
    items: Item[];
}
