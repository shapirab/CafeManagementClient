import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../users/register/register.component';
import { LoginComponent } from '../users/login/login.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {}

  signUp(){
    this.dialog.open(RegisterComponent, {
      width: '700px',
      height: '400px'
    });
  }

  login(){
    this.dialog.open(LoginComponent, {
      width: '700px',
      height: '400px'
    });
  }
}
