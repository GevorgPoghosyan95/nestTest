import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserRequest} from "../users/request/create-user.request";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import {json} from "express";

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService) {
    }


    async login(loginRequest: CreateUserRequest) {
        const user = await this.validateUser(loginRequest)
        return this.generateToken(user)
    }

    async registration(registrationRequest: CreateUserRequest) {
        const candidate = await this.userService.getUserByEmail(registrationRequest.email)
        if (candidate) {
            throw new HttpException('User already exist!', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(registrationRequest.password, 5)
        const user = await this.userService.createUser({...registrationRequest, password: hashPassword});
        return this.generateToken(user)
    }

    async generateToken(user) {
        const payload = {email: user.email, id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }

    }

    private async validateUser(loginRequest: CreateUserRequest) {
        const user = await this.userService.getUserByEmail(loginRequest.email)
        if(user){
            const passwordEquals = await bcrypt.compare(loginRequest.password,user.password)
            if(passwordEquals){
                return user;
            }
        }
        throw new UnauthorizedException({message: 'Incorrect email or password'})
    }
}
