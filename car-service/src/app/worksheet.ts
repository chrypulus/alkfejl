import { User } from "./user";
import { Part } from "./part";

export class Worksheet{
    id : number;
    partner : User;
    worker : User;
    parts : Part[];

}