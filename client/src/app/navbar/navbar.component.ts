import { Component } from '@angular/core';
import { UserService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor( public userApi: UserService) { }


  logout(){
    
    this.userApi.status=null;
  }
}
