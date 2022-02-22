import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {CreateRoleRequest} from "./request/create-role.request";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {

    }

    async createRole(request:CreateRoleRequest){
        const role = await this.roleRepository.create(request)
        return role;
    }

    async getRoleByValue(value:string){
        const role = await this.roleRepository.findOne({where:{value}})
        return role;
    }
}