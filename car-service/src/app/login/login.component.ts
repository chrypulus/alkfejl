import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Role } from '../role';
import { UserService } from '../user.service';
import { log } from 'util';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new User();
  message = "";

  async onSubmit(form: NgForm) {
    if (form.invalid) return;
    try {
      this.message = "Bejelentkezés folyamatban...";
      await this.userService.login(this.model);
      //this.router.navigateByUrl("/home");
    }
    catch (err) {
      this.message = "A bejelentkezés nem sikerült!";
      console.log(err);
    }
  }
  constructor(private userService : UserService,
              private router : Router
            ) { }

  ngOnInit() {
  }

}
