import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "../roles/roles.model";
import {User} from "../users/users.model";
import {UserRoles} from "../roles/user-roles.model";
import {FilesController} from "./files.controller";
import {FilesService} from "./files.service";


@Module({
    providers: [FilesService],
    controllers: [FilesController],
    imports: [
        SequelizeModule.forFeature([Role, User, UserRoles])
    ],
    exports: [
    ]
})
export class FilesModule {

}