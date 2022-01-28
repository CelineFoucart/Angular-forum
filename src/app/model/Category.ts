import { Forum } from "./Forum";

export class Category {

    constructor(public id:number, public title:string, public forums:Forum[]) {}

}