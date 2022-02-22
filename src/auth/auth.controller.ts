import {Body, Controller, Post, UseInterceptors, UsePipes} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CreateUserRequest} from "../users/request/create-user.request";
import {AuthService} from "./auth.service";
import {ValidationPipe} from "../pipes/validation.pipe";
import {LoggingInterceptor} from "../interceptors/logging.interceptor";

@ApiTags('Authorization')
@Controller('auth')
@UseInterceptors(LoggingInterceptor)
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
