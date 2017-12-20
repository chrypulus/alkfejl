import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReservationsService {
  url = "http://localhost:4200/api/reservation";

  constructor(private http : HttpClient) {}

  getReservations() : Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.url);
  }

  addReservation( r : Reservation) : Observable<Reservation> {
    return this.http.post<Reservation>(`http://localhost:4200/api/reservation`, r, httpOptions);
  }

  getReservation( id : number ) : Observable<Reservation> {
    return this.http.get<Reservation>(`http://localhost:4200/api/reservation/${id}`);
  }

  updateReservation( r : Reservation ) : Observable<Reservation> {
    return this.http.put<Reservation>(`http://localhost:4200/api/reservation/${r.id}`, r, httpOptions);
  }

  deleteReservation( r : Reservation ) : Observable<Reservation> {
    return this.http.delete<Reservation>(`http://localhost:4200/api/reservation/${r.id}`);
  }

}
