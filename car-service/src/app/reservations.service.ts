import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { RESERVATIONS } from './mock/mock-reservations';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ReservationsService {

  constructor() { }

  getReservations() : Observable<Reservation[]> {
    return of(RESERVATIONS);
  }
}
