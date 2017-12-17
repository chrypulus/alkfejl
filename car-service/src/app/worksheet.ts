import { User } from "./user";
import { Part } from "./part";

export class Worksheet{
    appointment : Date;
    partner : User;
    worker : User;
    parts : Part[];

    constructor(partner : User, worker : User, parts : Part[], appointment : Date){
        this.partner = partner;
        this.worker = worker;
        this.parts = parts;
        this.appointment = appointment;
    }

    getSum() : number {
        let sum = 0;
        for( let part of this.parts){
            sum += part.price;
        }
        return sum;
    }
}