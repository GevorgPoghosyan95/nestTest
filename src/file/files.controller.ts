import {Controller, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";
import {FilesService} from "./files.service";
import * as fs from "fs"

@Controller()
export class FilesController {
    constructor(private fileService:FilesService) {
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        fs.writeFile(`src/file/${file.originalname}`, file.buffer, (err) => {
            if(err) throw err;

            console.log('Done')
        })
        return {message:'File uploaded successfully!',status:200};
    }
}