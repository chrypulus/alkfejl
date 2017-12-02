import { Role } from "./role";

export class User{
    name : string;
    address : string;
    phone : string;
    id : number;
    username : string;
    password : string;
    role : Role;
    constructor(name : string, address : string, phone : string, id : number, password : string, username : string, role : Role){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.id = id;
        this.password = password;
        this.username = username;
        this.role = role;
    }
}