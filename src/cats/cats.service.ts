import {Injectable} from "@nestjs/common";
import {Cat} from "./cat";
import {GetCatArgs} from "./dto/args/get-cat.args";


@Injectable()
export class CatsService {
    private cats:Cat[] = [{
        userId:'1',email:'test@mail.ru',age:23
    }];

    public getCat(getCatArgs:GetCatArgs):Cat{
        return this.cats.find(cat=>cat.userId === getCatArgs.userId)
    }

    public test(){
        console.log('okokoko')
    }




}