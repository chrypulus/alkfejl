import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  months : string[] = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
  currentMonth : number;
  reservations : Reservation[];
  currentReservations : Reservation[];

  constructor(private reservationsService : ReservationsService) { }

  changeMonth(month : string){
    this.currentMonth = this.months.indexOf(month);
    this.filterReservations();
  }

  getReservations() : void {
    this.reservationsService.getReservations().subscribe(reservations => this.reservations = reservations);
  }

  filterReservations() : void {
    this.currentReservations = [];
    for(let res of this.reservations){
      if(res.appointment.getMonth() === this.currentMonth){
        this.currentReservations.push(res);
      }
    }
  }

  ngOnInit() {
    this.getReservations();
    this.currentMonth = new Date().getMonth();
    this.filterReservations();
  }

}
