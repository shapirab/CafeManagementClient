import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/users/login/login.component';
import { UserLoginDto } from 'src/app/models/userLoginDto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(values: any){
    let loginUser: UserLoginDto = {
      username: values.email,
      password: values.password
    }
    this.authService.login(loginUser).subscribe({
      next: (res) =>  {
        this.dialogRef.close()
      },
      error: err => console.log(err)
    });
  }

  onClose(){
    this.dialogRef.close();
  }

}
