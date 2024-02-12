import { Component } from '@angular/core';
import { UserService } from '../../login/login.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  constructor(private usernameService: UserService) { }

  ngOnInit(): void {
    // Fetch initial data if needed
    this.onTabClick(2);
    
  }
  username = this.usernameService.getUsername();

  tabIndex: any;

 

  onTabClick(index: number) {
    this.tabIndex = index;
  }

   
}
