import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/components/users/register/register.component';
import { ClientCompany } from 'src/app/models/clientCompany';
import { RegisterUserDto } from 'src/app/models/user';
import { UserDto } from 'src/app/models/userDto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  clientCompany?: ClientCompany;
  constructor(private dialogRef: MatDialogRef<RegisterComponent>, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(values: any){
    let user: RegisterUserDto = {
      CompanyName: values.name,
      ContactNumber: values.contactNumber,
      Email: values.email,
      UserRole: 0,
      Username: values.email,
      Password: values.password
    }
    this.authService.registerUser(user).subscribe({
      next: (response) => {
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('RegisterFormComponent::onSubmit(). Error: ', error);
      }
    });
  }

  onClose(){
    this.dialogRef.close();
  }
}
