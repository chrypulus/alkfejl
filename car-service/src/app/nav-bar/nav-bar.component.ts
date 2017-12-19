import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Role } from '../role';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private user : User;
  constructor(private userService : UserService) {
    this.userService.getCurrentUser().subscribe(currentUser => this.user = currentUser);
  }

  ngOnInit() {
  }

}
