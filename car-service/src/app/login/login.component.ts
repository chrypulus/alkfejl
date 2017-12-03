import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Role } from '../role';
import { UserService } from '../user.service';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new User("", "", "", -1, "", "", Role.PARTNER);
  loginError = false;
  loggedin = false;
  onSubmit() : void {
    if(!this.userService.login(this.model.username, this.model.password)){
      this.loginError = true;
    } else {
      this.loggedin = true;
    }
  }
  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  getUserName() : string {
    var username;
    this.userService.getUserName().subscribe(name => username = name);
    return username;
  }

  getUserType() : Role {
    var type;
    this.userService.getUserType().subscribe(role => type = role);
    return type;
  }
}
