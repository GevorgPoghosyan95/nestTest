import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleRequest {
    @ApiProperty({example:'ADMIN',description:'Administrator'})
    @IsNotEmpty()
    value: string;

    @IsNotEmpty()
    description: string;
}