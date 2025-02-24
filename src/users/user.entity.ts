import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Order } from '../orders/order.entity';
import { Token } from '../tokens/token.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @ManyToOne(() => Token, token => token.users)
    token: Token;

    @Column()
    isAdmin: boolean;

    @OneToMany(() => Order, order => order.user)
    orders: Order[];
}
