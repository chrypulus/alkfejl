import { User } from "./user";
import { Category } from "./category";

// foglalások (partner, időpont, szerelő, típus, megjegyzés);

export class Reservation{
    partner : User;
    appointment : Date;
    worker : User;
    category : Category;
    comment : string;
    id : number;
}