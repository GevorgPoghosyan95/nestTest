import {Body, Controller, Post, UsePipes} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CreateUserRequest} from "../users/request/create-user.request";
import {AuthService} from "./auth.service";
import {ValidationPipe} from "../pipes/validation.pipe";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService) {

    }

    @UsePipes(ValidationPipe)
    @Post('/login')
    login(@Body() loginRequest:CreateUserRequest){
        return this.authService.login(loginRequest)
    }

    @Post('/registration')
    registration(@Body() registrationRequest:CreateUserRequest){
        return this.authService.registration(registrationRequest)
    }


}
