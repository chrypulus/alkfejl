import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from './user';
import { Role } from './role';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  redirectUrl: string;
  userUrl = "http://localhost:4200/api/user";
  isLoggedIn : boolean = false;
  user : User;

  constructor(private http : HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  register(user: User) {
    return this.http.post('/api/users/register', user);
  }

  login(user: User): Promise<User> {
    return this.http.post<User>('api/user/login', user, httpOptions).pipe(
      tap((res: User) => {
        console.log('service login', res);
        this.isLoggedIn = true;
        this.user = res;
      })
    ).toPromise();
  }

  logout() {
    return this.http.post('api/user/logout', {}, httpOptions).pipe(
      tap(res => {
        console.log('service logout', res);
        this.isLoggedIn = false;
        this.user = new User();
      })
    ).toPromise();
  }

}
