import { Component } from '@angular/core';
import { SignupService } from './signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userId: string = "";
  userEmail: string = "";
  userPhoneNumber: any ;
  location: string = "";
  password: string = "";

  constructor(private signupService: SignupService) { }
  clearForm(){
    this.userId = "";
    this.userEmail = "";
    this.userPhoneNumber = "";
    this.location = "";
    this.password = "";
  }
  submitSignupForm(): void {
    const userData = {
      userid: this.userId,
      useremail: this.userEmail,
      userphonenumber: this.userPhoneNumber,
      location: this.location,
      password: this.password
    };

    this.signupService.signup(userData).subscribe(
      (res: any) => {
        if(res.message === "User registered successfully"){
          alert('Sign up successful: ' + res.message);
          this.clearForm();
        }
        else{
          alert('Sign up unsuccessful: ' + res.message);
          this.clearForm();
        }
        
        // Handle success, such as showing a success message or redirecting to another page
      },
      (error) => {
        console.error('Error signing up:', error);
        // Handle error, such as displaying an error message to the user
      }
    );
  }
}
