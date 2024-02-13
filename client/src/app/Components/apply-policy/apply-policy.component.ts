import { Component, OnInit } from '@angular/core';
import { ApplyPolicyService } from './apply-policy.service';
import { error } from 'console';

@Component({
  selector: 'app-apply-policy',
  templateUrl: './apply-policy.component.html',
  styleUrl: './apply-policy.component.css'
})
export class ApplyPolicyComponent implements OnInit {

  policies: any[] = [];
  showform: any = false;
  PolicyCategory!: any ;
  formheader!: string;
  UserName: any;
  UserEmail: any;
  UserPhoneNUmber: any;

  constructor(private policyService: ApplyPolicyService) { }

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies(): void {
    // Fetch policies from the service
    this.policyService.getpolicy().subscribe(
      (data: any) => {
        this.policies = data;
      },
      (error) => {
        console.error('Error fetching policies:', error);
      }
    );
  }

  closeform() {
    this.showform = false;
    this.clearform()
  }
  clearform() {
    this.UserName = null;
    this.UserEmail = null;
    this.UserPhoneNUmber = null;
  }

  openform(data: any = null) {
    // this.clearform();
    this.showform = true;
    this.UserName = "";
    this.UserEmail = "";
    this.UserPhoneNUmber = "";
    this.PolicyCategory = data.PolicyCategory;
    this.formheader = "Apply Policy"
  }


  applyForPolicy(policy: any) {
    this.openform();
  }


  applypolicy() {
    this.showform = false;
    let body = {
      username: this.UserName,
      useremail: this.UserEmail,
      userphonenUmber: this.UserPhoneNUmber,
      policycategory: this.PolicyCategory,
      status: "pending",
    }
    // console.log(body);
    this.policyService.postpolicy(body).subscribe(
      (res) => {
        alert(`Policy Apply Sucessfuly.`);
        this.loadPolicies();
      },
      (error: any) => {
        console.log("error while adding policy to server", error);
      }
    )
  }

}
