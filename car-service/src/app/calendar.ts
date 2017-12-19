
export class Calendar{
    private days : Date[];
    private month : number;
    private months = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
    private day = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
    constructor(){
        this.month = new Date().getMonth();
        this.updateCalendar();
    }
    private updateCalendar() : void {
        this.days = [];
        let daysInMonth = new Date(new Date().getFullYear(),this.month + 1, 0).getDate();
        for(let i = 1; i <= daysInMonth; i++){
            let d = new Date(new Date().getFullYear(), this.month, i);
            if(d.getDay() != 6 && d.getDay() != 0){
                this.days.push(d);
            }
        }
    }
    changeMonth(m : number) : void {
        if(m != this.month){
            this.month = m;
            this.updateCalendar();
        }
    }
    getMonth() : string {
        return this.months[this.month];
    }

    getDays() : Date[] {
        return this.days;
    }

    getDayString(d : Date) : string {
        return this.months[d.getMonth()] + " "+  d.getDate() + ". " + this.day[d.getDay()];
    }
}