import { Component, OnInit } from '@angular/core';
import { WorksheetService } from '../worksheet.service';
import { UserService } from '../user.service';
import { ReservationsService } from '../reservations.service';
import { User } from '../user';
import { Reservation } from '../reservation';
import { Worksheet } from '../worksheet';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Part } from '../part';
import { PartsService } from '../parts.service';

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css']
})
export class WorksheetComponent implements OnInit {
  ws : Worksheet;
  r : Reservation;
  parts : Part[] = [];
  model : Part;
  constructor(private userService : UserService,
    private reservationService:ReservationsService, private worksheetService : WorksheetService,
    private route : ActivatedRoute, private location : Location,
    private partsService : PartsService) {}

  ngOnInit() {
    this.getWS();
    this.getParts();
  }

  getWS() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reservationService.getReservation(id).subscribe(res => this.r = res);
    if(this.r.wsid != -1){
      this.worksheetService.getWorksheet(this.r.wsid)
        .subscribe(ws => this.ws = ws);
    }
  }

  getParts() {
    this.partsService.getPartsByWorksheet(this.ws.id);
  }

  back() {
    this.location.back();
  }

  deleteReservation(){
    let ob = this.reservationService.deleteReservation(this.r);
    ob.subscribe(reservation => this.location.back());
  }

  deletePart(p : Part){
    let ob = this.partsService.deletePart(p);
  }

  submit() {
    this.model.wsid = this.ws.id;
    let ob = this.partsService.addPartToWorksheet(this.ws, this.model);
    ob.subscribe(ws => this.model = new Part());
  }

}
