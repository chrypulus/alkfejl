import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { UserService } from '../user.service';
import { Reservation } from '../reservation';
import { User } from '../user';
import { Role } from '../role';
import { Calendar } from '../calendar';
import { Category } from '../category';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {
  model = new Reservation();
  reservations = [];
  filteredReservations = [];
  users = [];
  workers = [];
  location : Location;

  constructor(private reservationsService : ReservationsService, private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filterWorkers();
    });
    this.reservationsService.getReservations().subscribe(res => {
      this.reservations = res;
      this.filterReservations();
    });
  }

  filterWorkers() {
    this.workers = this.users.filter(user => user.role == Role.WORKER);
  }

  filterReservations() {
    if(this.model.worker != null)
    this.filteredReservations = this.reservations.filter(r => r.worker == this.model.worker);
  }

  notReservedDay = (d: Date): boolean => {
    //const day = d.getDate();
    //const month = d.getMonth();
    if(d.getTime() < new Date().getTime())return false;
    if(this.model.worker == null)return false;
    for(let fr of this.filteredReservations){
      if(fr.appointment == d)return false;
    }
    return true;
  }

  submit() : void {
    this.model.wsid = -1;
    let ob = this.reservationsService.addReservation(this.model);
    ob.subscribe(reservation => this.location.back());
  }
}
