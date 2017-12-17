import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Worksheet } from './worksheet';
import { WORKSHEETS } from './mock/mock-worksheet';
import { Reservation } from './reservation';

@Injectable()
export class WorksheetService {
  private worksheets : Worksheet[] = [];
  private currentWS : Worksheet;

  constructor() {
    this.load();
  }

  load() : void {
    this.worksheets = WORKSHEETS;
  }

  getWorksheets() : Observable<Worksheet[]> {
    return of(this.worksheets);
  }

  addWorksheet(ws : Worksheet) : void {
    this.worksheets.push(ws);
  }

  getWSbyReservation(res : Reservation) : Worksheet {
    for(let ws of this.worksheets){
      if(ws.partner == res.partner && ws.worker == res.worker && res.appointment == ws.appointment){
        return ws;
      }
    }
    return null;
  }

}
