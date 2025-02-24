import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('tokens')
export class Token {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    token: string;

    @Column()
    expireDate: Date;

    @OneToMany(() => User, user => user.token)
    users: User[];
}
