import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

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

    @Post('login')
    login(@Body() body: LoginDto) {
        return this.usersService.login(body);
    }

    @Post('admin/:id')
    addAdmin(@Param('id') id: number, @Headers('authorization') authHeader: string) {
        return this.usersService.addAdmin(id, authHeader);
    }
}
