import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Reservation } from '../reservation';
import { log } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user : User;
  reservations : Reservation[];
  constructor(private reservationService : ReservationsService, private userService : UserService) {
    this.getReservations();
  }

  getReservations() : Reservation[] {
    this.reservationService.getReservations().subscribe(reservations => this.reservations = reservations);
    log(""+this.reservations.length);
    return this.reservations;
  }

  getUser() : User {
    this.userService.getCurrentUser().subscribe(currentUser => this.user = currentUser);
    return this.user;
  }

  ngOnInit() {
  }


}
