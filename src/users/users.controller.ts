import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiHeader, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @ApiOperation({ summary: 'Retrieve all users' })
    @ApiResponse({ status: 200, description: 'List of users', type: [User] })
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieve a user by ID' })
    @ApiParam({ name: 'id', type: 'number', description: 'User ID' })
    @ApiResponse({ status: 200, description: 'User details', type: User })
    getUserById(@Param('id') id: number) {
        return this.usersService.getUserById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiBody({ type: User })
    @ApiResponse({ status: 201, description: 'User created', type: User })
    createUser(@Body() user: User) {
        return this.usersService.createUser(user);
    }

    @Post('login')
    @ApiOperation({ summary: 'User login' })
    @ApiBody({ type: LoginDto })
    @ApiResponse({ status: 200, description: 'Successful login', type: String })
    login(@Body() body: LoginDto) {
        return this.usersService.login(body);
    }

    @Post('admin/:id')
    @ApiOperation({ summary: 'Grant admin privileges to a user' })
    @ApiParam({ name: 'id', type: 'number', description: 'User ID' })
    @ApiHeader({ name: 'authorization', description: 'Admin token', required: true })
    @ApiResponse({ status: 200, description: 'Admin privileges granted' })
    addAdmin(@Param('id') id: number, @Headers('authorization') authHeader: string) {
        return this.usersService.addAdmin(id, authHeader);
    }
}