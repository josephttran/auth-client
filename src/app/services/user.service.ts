import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

export interface User {
  user_id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrl}/user`);
  }
}
