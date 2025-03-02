import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() user: User) {
        return this.usersService.createUser(user);
    }
}
