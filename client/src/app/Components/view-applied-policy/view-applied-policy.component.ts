import { Component, OnInit } from '@angular/core';
import {AppliedPolicyService} from './view-applied-policy.service'
@Component({
  selector: 'app-view-applied-policy',
  templateUrl: './view-applied-policy.component.html',
  styleUrl: './view-applied-policy.component.css'
})
export class ViewAppliedPolicyComponent implements OnInit{
  appliedDetails: any[] = [];

  constructor(private AppliedpolicyService: AppliedPolicyService) { }

  ngOnInit(): void {
    this.loadAppliedDetails();
  }

  loadAppliedDetails(): void {
    // Fetch applied details from the service
    this.AppliedpolicyService.viewappliedpolicy().subscribe(
      (data: any) => {
        this.appliedDetails = data;
      },
      (error) => {
        console.error('Error fetching applied details:', error);
      }
    );
  }

  approvePolicy(Id: Number, detail: any): void {
    let body = {
      status: "Approved"
    }
    this.AppliedpolicyService.updateappliedpolicy(Id,body).subscribe(
      (data:any) => {
        detail.Status =  "Approved";
        alert("id number is " + Id)
        this.loadAppliedDetails();
      }
    )
  }

  rejectPolicy(Id: Number, detail: any): void {
    let body = {
      status: "Rejected"
    }
    this.AppliedpolicyService.updateappliedpolicy(Id,body).subscribe(
      (data:any) => {
        detail.Status = "Rejected";
        this.loadAppliedDetails();
      }
    )
  }
}
