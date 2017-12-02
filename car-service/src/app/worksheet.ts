import { User } from "./user";
import { Part } from "./part";

// munkalapok (partner, szerelő, anyagok és alkatrészek);

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