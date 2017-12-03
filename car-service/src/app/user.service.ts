import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {USERS} from './mock/mock-users';
import { User } from './user';
import { Role } from './role';

@Injectable()
export class UserService {
  private currentUser : User = null;
  private users : User[] = [];
  constructor() {
    this.loadUsers();
  }

  private loadUsers() : void {
    this.users = USERS;
  }

  login(username : string, password : string) : boolean {
    for(let user of this.users){
      if(user.username == username && user.password == password){
        this.currentUser = user;
        return true;
      }
    }
    return false;
  }

  logout(){
    this.currentUser = null;
  }

  isLoggedIn() : boolean {
    return this.currentUser != null;
  }

  getCurrentUser() : Observable<User> {
    return of(this.currentUser);
  }

  getUserName() : Observable<string> {
    return of(this.currentUser.name);
  }

  getUserType() : Observable<Role> {
    return of(this.currentUser.role);
  }

  registerUser(newUser : User) : boolean {
    for(let user of this.users){
      if(user.username == newUser.username){
        return false;
      }
    }
    this.users.push(newUser);
    return true;
  }

}