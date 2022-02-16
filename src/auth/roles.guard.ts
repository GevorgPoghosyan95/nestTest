import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "./roles-auth.decorator";
import {log} from "util";
import {type} from "os";

@Injectable()
export class RolesGuard implements CanActivate{

    constructor(private jwtService:JwtService,private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try{
            const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
            if (!requiredRoles) {
                return true;
            }
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]
            if(bearer != 'Bearer' || !token){
                throw new UnauthorizedException({message:'User dont authorized'})
            }
            const user = this.jwtService.verify(token)
            req.user = user;
            return user.roles.some(role=>requiredRoles.includes(role.value))
        }catch (e) {
            console.log(e);
            throw new UnauthorizedException({message:'User dont authorized'})
        }
    }
}