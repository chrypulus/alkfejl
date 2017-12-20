import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model = new User();
  success : boolean = true;
  location : Location;
  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    let ob = this.userService.register(this.model);
    ob.subscribe(reservation => this.location.go("/home"));
  }

}
