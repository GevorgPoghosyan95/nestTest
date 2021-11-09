import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleRequest} from "./request/create-role.request";

@Controller('roles')
export class RolesController {
    constructor(private roleService:RolesService) {

    }

    @Post('/create')
    create(@Body() request:CreateRoleRequest){
        return this.roleService.createRole(request);
    }

    @Get('/:value')
    getByValue(@Param('value') value:string){
        return this.roleService.getRoleByValue(value)
    }
}
