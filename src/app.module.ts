import {Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {SequelizeModule} from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { join } from 'path';
import {CatsModule} from "./cats/cats.module";

@Module({

    imports: [
        ConfigModule.forRoot({
            envFilePath:'.env',
        }),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'nesttest',
            models: [User,Role,UserRoles],
            autoLoadModels:true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        // GraphQLModule.forRoot({
        //     driver: ApolloDriver,
        //     autoSchemaFile: true,
        // }),
        // CatsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
