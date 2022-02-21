import {Args, Query, Resolver} from "@nestjs/graphql";
import {Cat} from "./cat";
import {CatsService} from "./cats.service";
import {GetCatArgs} from "./dto/args/get-cat.args";

@Resolver(()=>Cat)
export class CatsResolver{
    constructor(private readonly catService:CatsService) {}

    @Query(()=>Cat,{name:'cat',nullable:true})
     getCat(@Args() getCatArgs:GetCatArgs):Cat{
        return this.catService.getCat(getCatArgs);
    }
}