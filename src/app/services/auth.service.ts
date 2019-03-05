import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.baseUrl;
  redirectUrl = '';

  constructor(private http: HttpClient, private router: Router) { }

  onAuthenticate(token: string) {
    localStorage.setItem('userToken', token);
    this.router.navigate(['/']);
  }

  authenticate(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, { email, password });
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/signup`, user);
  }

  logout() {
    localStorage.removeItem('userToken');
  }
}
