import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model = new User("", "", "", -1, "", "", null);
  success : boolean = true;
  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.registerUser(this.model).subscribe(ok => this.success = ok);
  }

}
