import { Component, OnInit } from '@angular/core';
import { Part } from '../part';
import { Reservation } from '../reservation';
import { Worksheet } from '../worksheet';

@Component({
  selector: 'app-newws',
  templateUrl: './newws.component.html',
  styleUrls: ['./newws.component.css']
})
export class NewwsComponent implements OnInit {
  private model : Part;
  private r : Reservation;
  private ws : Worksheet;
  
  constructor() {

  }

  ngOnInit() {
  }

}
