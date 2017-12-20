import { Component, OnInit } from '@angular/core';
import { Part } from '../part';
import { Reservation } from '../reservation';
import { Worksheet } from '../worksheet';
import { WorksheetService } from '../worksheet.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable , } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-newws',
  templateUrl: './newws.component.html',
  styleUrls: ['./newws.component.css']
})
export class NewwsComponent implements OnInit {
  private model : Worksheet;
  
  constructor(private worksheetService : WorksheetService,
              private route : ActivatedRoute,
              private location : Location) { }
  
  ngOnInit() {
    this.getWorksheet();
  }

  getWorksheet() {
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      const id = params.get('id');
      const model = id !== null ?  this.worksheetService.getWorksheet(+id) : Observable.of(new Worksheet());
      return model;
    })
    .subscribe(ws => this.model = ws);
  }

  onFormSubmit(ws : Worksheet) {
    let ob: Observable<Worksheet>;
    if (ws.id > 0) {
      ob = this.worksheetService.updateWorksheet(ws);
    } else {
      ob = this.worksheetService.addWorksheet(ws);
    }
    ob.subscribe(issue => this.location.back());
  }

  onFormReset() {
    this.location.back();
  }

}
