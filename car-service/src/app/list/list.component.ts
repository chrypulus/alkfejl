import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Reservation } from '../reservation';
import { log } from 'util';
import { WorksheetService } from '../worksheet.service';
import { Worksheet } from '../worksheet';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user : User;
  reservations : Reservation[];
  worksheets : Worksheet[];
  constructor(private reservationService : ReservationsService, private userService : UserService, private worksheetService : WorksheetService) {
    this.getReservations();
    this.getUser();
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

  getWorksheets() : void {
    this.worksheetService.getWorksheets().subscribe(worksheets => this.worksheets = worksheets);
  }

  getWSByReservation(res : Reservation) : Worksheet {
    return this.worksheetService.getWSbyReservation(res);
  }

  ngOnInit() {
  }


}
