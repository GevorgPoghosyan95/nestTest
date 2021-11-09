import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttribute {
    value:string;
    description:string;
}

@Table({tableName:'roles'})
export class Role extends Model<Role,RoleCreationAttribute>{
    @ApiProperty({example:'1',description:'Unique identifier'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

    @ApiProperty({example:'ADMIN',description:'UNIQUE role name'})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    value:string;

    @ApiProperty({example:'123456789',description:'role description'})
    @Column({type:DataType.STRING,allowNull:false})
    description:string;

    @BelongsToMany(()=>User,()=>UserRoles)
    users:User[]
}