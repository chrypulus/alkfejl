import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { UserService } from '../user.service';
import { Role } from '../role';

@Component({
  selector: 'app-reslist',
  templateUrl: './reslist.component.html',
  styleUrls: ['./reslist.component.css']
})
export class ReslistComponent implements OnInit {

  reservations = [];
  filtered = [];

  constructor(private reservationService : ReservationsService,
              private userService : UserService) { }

  ngOnInit() {
    this.reservationService.getReservations().subscribe(
      reservations => {
        reservations = this.reservations = reservations;
        this.filter();
      })
  }

  filter() : void {
    if(this.userService.user.role == Role.PARTNER){
      this.filtered = this.reservations.filter(res => res.partner.id == this.userService.user.id);
    } else {
      this.filtered = this.reservations.filter(res => res.worker.id == this.userService.user.id);
    }
  }
}
