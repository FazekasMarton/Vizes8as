import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../orders/order.entity';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: 'Unique identifier of the user', example: 1 })
    id: number;

    @Column({ unique: true })
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    @ApiProperty({ description: 'Username of the user', minLength: 3, maxLength: 50, example: 'john_doe' })
    name: string;

    @Column({ unique: true })
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ description: 'Email address of the user', example: 'john.doe@example.com' })
    email: string;

    @Column({ select: false })
    @IsString()
    @IsNotEmpty()
    @Length(6, 100)
    @ApiProperty({ description: 'Password of the user (hidden in responses)', minLength: 6, maxLength: 100, example: 'password' })
    password: string;

    @Column({ default: false, select: false })
    @ApiProperty({ description: 'Whether the user has admin privileges', example: false })
    isAdmin: boolean;

    @OneToMany(() => Order, order => order.user)
    @ApiProperty({ description: 'List of orders associated with the user', type: () => [Order] })
    orders: Order[];
}