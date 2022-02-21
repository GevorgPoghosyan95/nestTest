import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Cat {
    @Field()
    userId:string;

    @Field()
    email:string;

    @Field()
    age:number;
}