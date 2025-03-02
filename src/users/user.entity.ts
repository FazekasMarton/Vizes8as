import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../orders/order.entity';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    name: string;

    @Column({ unique: true })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column({ select: false })
    @IsString()
    @IsNotEmpty()
    @Length(6, 100)
    password: string;

    @Column({ default: false, select: false })
    isAdmin: boolean;

    @OneToMany(() => Order, order => order.user)
    orders: Order[];
}
