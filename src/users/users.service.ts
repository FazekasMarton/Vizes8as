import { ConflictException, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';

@Injectable()
export class UsersService {
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
    
            const newUser = this.usersRepository.create(user);
            return await this.usersRepository.save(newUser);
        } catch (error) {
            if (error instanceof ConflictException) {
                throw error;
            }
    
            console.error('Unexpected error creating user:', error);
            throw new InternalServerErrorException('An unexpected error occurred.');
        }
    }
}