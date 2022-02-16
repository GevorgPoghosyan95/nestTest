import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequest } from './request/create-user.request';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
    this.userService = userService;
  }

  @ApiOperation({ summary: 'user create' })
  @ApiResponse({ status: 200, type: User })
  @Post('/create')
  create(@Body() createUserRequest: CreateUserRequest) {
    return this.userService.createUser(createUserRequest);
  }
  @ApiOperation({ summary: 'get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles("ADMIN")
  @UseGuards(JwtAuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
