import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Worksheet } from './worksheet';
import { WORKSHEETS } from './mock/mock-worksheet';
import { Reservation } from './reservation';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WorksheetService {
  url = "http://localhost:4200/api/worksheet";

  constructor(private http : HttpClient) {}

  getWorksheets() : Observable<Worksheet[]> {
    return this.http.get<Worksheet[]>(this.url);
  }

  addWorksheet( r : Worksheet) : Observable<Worksheet> {
    return this.http.post<Worksheet>(`http://localhost:4200/api/worksheet`, r, httpOptions);
  }

  getWorksheet( id : number ) : Observable<Worksheet> {
    return this.http.get<Worksheet>(`http://localhost:4200/api/worksheet/${r.id}`);
  }

  updateWorksheet( r : Worksheet ) : Observable<Worksheet> {
    return this.http.put<Worksheet>(`http://localhost:4200/api/worksheet/${r.id}`, r, httpOptions);
  }

  deleteWorksheet( r : Worksheet ) : Observable<Worksheet> {
    return this.http.delete<Worksheet>(`http://localhost:4200/api/worksheet/${r.id}`);
  }
}
