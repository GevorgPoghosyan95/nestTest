import { Injectable } from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserRequest} from "./request/create-user.request";
import {RolesService} from "../roles/roles.service";
import {Role} from "../roles/roles.model";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository:typeof User,private roleService:RolesService) {}

    async createUser(createUserRequest:CreateUserRequest){
        const user = await this.userRepository.create(createUserRequest)
        const role = await this.roleService.getRoleByValue(createUserRequest.role)
        await user.$set('roles',[role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers(){
        const  users = await this.userRepository.findAll({include:{all:true}});
        return users;
    }

    async getUserByEmail(email:string){
        const user = await this.userRepository.findOne({where:{email},include:{all:true}})
        return user;
    }
}
