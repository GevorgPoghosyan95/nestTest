import {Injectable, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {FileInterceptor} from "@nestjs/platform-express";


@Injectable()
export class FilesService {
    constructor(@InjectModel(User) private userRepository:typeof User) {
    }


}