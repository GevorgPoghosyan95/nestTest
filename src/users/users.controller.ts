import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserRequest} from "./request/create-user.request";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    private userService:UsersService;
    constructor(userService:UsersService) {
        this.userService = userService;
    }

    @ApiOperation({summary:'user create'})
    @ApiResponse({status:200,type:User})
    @Post('/create')
     create(@Body() createUserRequest:CreateUserRequest){
        return this.userService.createUser(createUserRequest)
    }
    @ApiOperation({summary:'get all users'})
    @ApiResponse({status:200,type:[User]})
    @Get()
    getAll(){
        return this.userService.getAllUsers();
    }

}
