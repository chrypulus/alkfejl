import { User } from "./user";
import { Category } from "./category";

// foglalások (partner, időpont, szerelő, típus, megjegyzés);

export class Reservation{
    partner : User;
    appointment : Date;
    worker : User;
    category : Category;
    comment : string;
    constructor(partner : User, appointment : Date, worker : User, category : Category, comment : string){
        this.partner = partner;
        this.appointment = appointment;
        this.worker = worker;
        this.category = category;
        this.comment = comment;
    }
}