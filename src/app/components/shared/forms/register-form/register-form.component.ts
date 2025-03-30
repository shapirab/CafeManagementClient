import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/components/users/register/register.component';
import { ClientCompany } from 'src/app/models/clientCompany';
import { RegisterUserDto } from 'src/app/models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  clientCompany?: ClientCompany;
  constructor(private dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(values: any){
    console.log('RegisterFormComponent::onSubmit(). Values: ', values);
  }

  onClose(){
    this.dialogRef.close();
  }
}
