import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { RESERVATIONS } from './mock/mock-reservations';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ReservationsService {
  private reservations : Reservation[];

  private load(){
    this.reservations = RESERVATIONS;
  }
  constructor() {
    this.load();
  }

  getReservations() : Observable<Reservation[]> {
    return of(this.reservations);
  }
}
