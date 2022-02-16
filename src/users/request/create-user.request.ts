import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class CreateUserRequest {
    @IsEmail({},{message:"Incorrect email"})
    @IsString({message:'Must be string'})
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    role: string;
}