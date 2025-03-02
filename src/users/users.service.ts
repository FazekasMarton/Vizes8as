import { ConflictException, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { IUser } from './utilites/IUser';
import { v4 as uuidv4 } from 'uuid';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {
    readonly users: Map<string, IUser> = new Map();

    constructor(
        @Inject('USER_REPOSITORY')
        private readonly usersRepository: ReturnType<typeof UsersRepository>,
    ) {}

    getUsers() {
        return this.usersRepository.findAllUser();
    }

    async getUserById(id: number) {
        try {
            return await this.usersRepository.findUserById(id);
        } catch (error) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
    }

    async createUser(user: User) {
        try {
            const existingUser = await this.usersRepository.findOne({
                where: { name: user.name }
            }) || await this.usersRepository.findOne({
                where: { email: user.email }
            });
    
            if (existingUser) {
                if (existingUser.name === user.name && existingUser.email === user.email) {
                    throw new ConflictException('Username and email are already taken.');
                } else if (existingUser.name === user.name) {
                    throw new ConflictException('Username is already taken.');
                } else {
                    throw new ConflictException('Email is already taken.');
                }
            }
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
    
            const newUser = this.usersRepository.create(user);
            const savedUser = await this.usersRepository.save(newUser);

            const token = uuidv4();

            this.users.set(token, {
                id: savedUser.id,
                user: savedUser.name,
                token: token,
                isAdmin: savedUser.isAdmin,
            });
            return this.users.get(token);
        } catch (error) {
            if (error instanceof ConflictException) {
                throw error;
            }
            throw new InternalServerErrorException('An unexpected error occurred.');
        }
    }

    async login(loginData: LoginDto) {
        const user = await this.usersRepository.findOne({
            where: { email: loginData.email },
            select: ['id', 'name', 'password', 'isAdmin']
        });

        if (!user) {
            throw new NotFoundException('User not found.');
        }

        const isMatch = await bcrypt.compare(loginData.password, user.password);

        if (!isMatch) {
            throw new NotFoundException('Invalid credentials.');
        }

        const token = uuidv4();

        this.users.set(token, {
            id: user.id,
            user: user.name,
            token: token,
            isAdmin: user.isAdmin,
        });

        return this.users.get(token);
    }

    async addAdmin(id: number, token: string) {
        const user = this.users.get(token);

        if (!user) {
            throw new NotFoundException('User not found.');
        }

        if (!user.isAdmin) {
            throw new ConflictException('You are not authorized to perform this action.');
        }

        const userToUpdate = await this.usersRepository.findOne({
            where: { id }
        });

        if (!userToUpdate) {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }

        userToUpdate.isAdmin = true;

        return await this.usersRepository.save(userToUpdate);
    }
}