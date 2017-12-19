import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { UserService } from '../user.service';
import { Reservation } from '../reservation';
import { User } from '../user';
import { Role } from '../role';
import { Calendar } from '../calendar';
import { Category } from '../category';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {
  private model : Reservation = new Reservation(null, null, null, null, null);
  private users : User[] = [];
  private reservations : Reservation[];
  cal : Calendar = new Calendar();
  selectedDay : Date = null;
  days : Date[];
  ok : boolean = false;
  saved : boolean = false;

  constructor(private reservationsService : ReservationsService, private userService : UserService) {
    this.getUsers();
    this.getReservations();
    this.userService.getCurrentUser().subscribe(currentUser => this.model.partner = currentUser);
  }

  ngOnInit() {
  }

  getUsers() : void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  getReservations() : void {
    this.reservationsService.getReservations().subscribe(reservations => this.reservations = reservations);
  }

  getWorkers() : User[] {
    let workers = [];
    for(let user of this.users){
      if (user.role == Role.WORKER){
        workers.push(user);
      }
    }
    return workers;
  }

  setWorker(w : User) : void {
    this.model.worker = w;
    this.days = this.cal.getDays();
  }

  calendarClicked(d : Date) : void {
    this.selectedDay = d;
    this.model.appointment = d;
  }

  freeDays() : Date[] {
    let fd = [];
    for(let d of this.cal.getDays()){
      if(!this.isReserved(d)){
        fd.push(d);
      }
    }
    return fd;
  }

  setCategory(c : Category){
    this.model.category = c;
  }

  save() : void {
    this.reservationsService.saveReservation(this.model);
    this.saved = true;
  }

  getCategory() : string{
    var cat;
    if(this.model.category == Category.MALFUNCTION)cat="Meghibásodás";
    if(this.model.category == Category.MOT)cat="Műszaki vizsga";
    if(this.model.category == Category.MANDATORY)cat="Kötelező szervíz";
    return cat;
  }

  isReserved(d : Date) : boolean {
    for(let res of this.reservations){
      if(res.appointment.getTime() == d.getTime() && res.worker == this.model.worker){
        return true;
      }
    }
    return false;
  }
}
