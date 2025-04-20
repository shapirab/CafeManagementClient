import { Injectable } from '@angular/core';
import { RegisterUserDto } from '../models/user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserDto } from '../models/userDto';
import { UserLoginDto } from '../models/userLoginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;

  private currentUserSource = new BehaviorSubject<UserDto | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }

  registerUser(user: RegisterUserDto) : Observable<UserDto> {
    return this.http.post<UserDto>(`${this.baseUrl}/account/register`, user).pipe(
      map(user => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user)
        }
        return user;
      })
    );
  }

  login(loginUser: UserLoginDto): Observable<UserDto>{
    return this.http.post<UserDto>(`${this.baseUrl}/account/login`, loginUser).pipe(
      map(user => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    );
  }
}
