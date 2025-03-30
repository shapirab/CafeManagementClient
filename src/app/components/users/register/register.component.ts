import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title: string = 'Sign Up';
  formType: string = 'sign-up';
  constructor() { }

  ngOnInit(): void {
  }
}
