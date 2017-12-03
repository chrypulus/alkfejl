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
    getCategory() : string {
        if(this.category == Category.MALFUNCTION)return "Meghibásodás";
        if(this.category == Category.MANDATORY)return "Kötelező szervíz";
        if(this.category == Category.MOT)return "Műszaki vizsga";
    }
    getDate() : string {
        let months = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
        var day;
        var hours;
        var minutes;
        day = this.appointment.getDay() < 10 ? "0" + this.appointment.getDay() : "" + this.appointment.getDay();
        hours = this.appointment.getHours() < 10 ? "0" + this.appointment.getHours() : "" + this.appointment.getHours();
        minutes = this.appointment.getMinutes() < 10 ? "0" + this.appointment.getMinutes() : "" + this.appointment.getMinutes();
        return this.appointment.getFullYear() + ". " +months[this.appointment.getMonth()] + " " + day + ". " +hours + ":" + minutes;
    }
}