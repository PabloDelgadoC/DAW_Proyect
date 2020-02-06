import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserInterface } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private htttp: HttpClient) {}

  registrarUsuario(id: string, name: string, user: string, password: string) {
    const url_api = '';
    return this.htttp.post<UserInterface>(url_api, {
      id: id,
      name: name,
      user: user,
      password: password
    },
    {headers: this.headers}
    )
    .pipe(map(data => data));
  }

  loginUser(user: string, password: string): Observable<any> {
    const url_api = '';
    return this.htttp.post<UserInterface>(url_api, {
      user: user,
      password: password
    },
    { headers: this.headers }
    )
    .pipe(map(data => data));
  }

  setUser(user: UserInterface): void {
    const user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken(): string {
    return localStorage.getItem('accessToken');
  }

  getCurrentUser(): UserInterface {
    const user_string = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(user_string)) {
      const user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    const accessToken = localStorage.getItem('accessToken');
    const url_api = ''; /*`http://localhost:3000/api/Users/logout?access_token=${accessToken}`*/
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    return this.htttp.post<UserInterface>(url_api, { headers: this.headers });
  }

}
