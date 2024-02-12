import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: any;
  password: any;
  constructor(private router: Router, public userApi: UserService) { }

  login(): void {
    let body = {
      userid: this.username,
      password: this.password
    }
    this.userApi.validate(body).subscribe(
      (data: any) => {
        if(data.data  == null){
          alert(`${this.username} Does not Exist.`)
        }
        else if (data.data.UserID === "admin" && data.data.Password === 'admin123') {
          // Navigate to the dashboard if the credentials are correct
          this.username = this.userApi.setUsername("admin");
          this.router.navigate(['/dashboard']);
        } else {
          // Redirect to the user dashboard if the credentials are incorrect
          this.username = this.userApi.setUsername(data.data.UserID);
          this.router.navigate(['/dashboard']);
          this.router.navigate(['/userDashboard']);
        }
      }
    )
  }
}
