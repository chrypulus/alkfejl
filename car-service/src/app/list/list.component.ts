import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Reservation } from '../reservation';
import { log } from 'util';
import { WorksheetService } from '../worksheet.service';
import { Worksheet } from '../worksheet';
import { Role } from '../role';
import { Category } from '../category';
import { Calendar } from '../calendar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user : User;
  reservations : Reservation[];
  worksheets : Worksheet[];
  cal : Calendar = new Calendar();
  constructor(private reservationService : ReservationsService, private userService : UserService, private worksheetService : WorksheetService) {
    this.getReservations();
    this.getUser();
  }

  getReservations() : void {
    this.reservationService.getReservations().subscribe(reservations => this.reservations = reservations);
  }

  filterByUser() : Reservation[] {
    let r = [];
    for(let res of this.reservations){
      if((this.user.role == 0 && res.partner == this.user) ||(this.user.role==1 && res.worker == this.user)){
        r.push(res);
      }
    }
    return r;
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
