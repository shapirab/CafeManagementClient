import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../models/userDto';
import { RegisterUserDto } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   baseUrl: string = 'https://localhost:7079/api';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<RegisterUserDto[]>{
    return this.http.get<RegisterUserDto[]>(`${this.baseUrl}/users`);
  }
}
