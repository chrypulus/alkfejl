import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Worksheet } from './worksheet';
import { Part } from './part';

/*
/parts/list/{id} : kilistázza az alkatrészeket, adott worksheet szerint
/parts/create/{id} : hozzáad worksheethez alaktrészt
/parts/{id} : kiír, updatel, töröl
*/

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PartsService {

  constructor(private http : HttpClient) { }

  getPartsByWorksheet(id : number) : Observable<Part[]> {
    return this.http.get<Part[]>(`http://localhost:4200/api/parts/list/${id}`);
  }

  addPartToWorksheet(w : Worksheet, p : Part) {
    return this.http.post(`http://localhost:4200/api/parts/create/${w.id}`, p, httpOptions);
  }

  getPart( id : number) : Observable<Part> {
    return this.http.get<Part>(`http://localhost:4200/api/parts/${id}`);
  }

  updatePart( p : Part) : Observable<Part> {
    return this.http.put<Part>(`http://localhost:4200/api/parts/${p.id}`, p, httpOptions);
  }

  deletePart( p : Part ) : Observable<Part> {
    return this.http.delete<Part>(`http://localhost:4200/api/parts/${p.id}`);
  }
  
}
