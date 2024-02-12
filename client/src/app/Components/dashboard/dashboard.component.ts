import { Component, OnInit } from '@angular/core';
import { UserService } from '../../login/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  constructor(private usernameService: UserService) { }
  ngOnInit(): void {
    // Fetch initial data if needed
    this.onTabClick(0);
  }
  username = this.usernameService.getUsername();
  tabIndex: any;
  onTabClick(index: number) {
    this.tabIndex = index;
  }
}