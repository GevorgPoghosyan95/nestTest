import {ArgsType, Field} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";

@ArgsType()
export class GetCatArgs {
    @Field()
    @IsNotEmpty()
    userId:string;
}