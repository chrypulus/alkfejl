import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { RESERVATIONS } from './mock/mock-reservations';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ReservationsService {
  private reservations : Reservation[];
  private id = 0;
  generateId() : number {
    this.id++;
    return this.id;
  }
  private load(){
    for(let r of RESERVATIONS){
      this.saveReservation(r);
    }
  }
  constructor() {
    //this.load();
  }

  getReservations() : Observable<Reservation[]> {
    return of(this.reservations);
  }

  saveReservation(r : Reservation) : void {
    let res = new Reservation();
    res.partner = r.partner;
    res.worker = r.worker;
    res.appointment = r.appointment;
    res.category = r.category;
    res.comment = r.comment;
    res.id = this.generateId();
    this.reservations.push(res);
  }
}
