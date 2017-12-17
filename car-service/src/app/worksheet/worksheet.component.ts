import { Component, OnInit } from '@angular/core';
import { WorksheetService } from '../worksheet.service';
import { UserService } from '../user.service';
import { ReservationsService } from '../reservations.service';
import { User } from '../user';
import { Reservation } from '../reservation';
import { Worksheet } from '../worksheet';

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css']
})
export class WorksheetComponent implements OnInit {
  private user : User;
  private reservations : Reservation[];
  private worksheets : Worksheet[];

  constructor(private worksheetService : WorksheetService, private userService : UserService, 
    private reservationsService : ReservationsService) {
      this.getUser();
      this.getReservation();
      this.getWorksheets();
    }

  ngOnInit() {
  }

  getUser() : void {
    this.userService.getCurrentUser().subscribe(user => this.user = user);
  }
  getReservation() : void {
    this.reservationsService.getReservations().subscribe(reservations => this.reservations = reservations);
  }
  getWorksheets() : void {
    this.worksheetService.getWorksheets().subscribe(worksheets => this.worksheets = worksheets);
  }

}
