import { User } from "./user";
import { Part } from "./part";

export class Worksheet{
    partner : User;
    worker : User;
    parts : Part[];

    constructor(partner : User, worker : User, parts : Part[]){
        this.partner = partner;
        this.worker = worker;
        this.parts = parts;
    }
}