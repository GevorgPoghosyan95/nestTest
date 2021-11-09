import {IsNotEmpty} from "class-validator";

export class CreateRoleRequest {
    @IsNotEmpty()
    value: string;

    @IsNotEmpty()
    description: string;
}