import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PolicyService } from './policy.service';
import { error} from 'console';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent implements OnInit {

  PolicyId: any;
  PolicyCategory: any = "";
  PolicyPremium: any = "";
  showform: any = false;
  formheader: any = ""
  policies: any;
  previousId: any;

  constructor(public policyGetApi: PolicyService, public http: HttpClient) { }

  ngOnInit(): void {
    this.showPolicies();
  }


  openform(data: any = null) {
    this.clearform();
    this.showform = true;
    var saveButton = (<HTMLButtonElement>document.getElementById("savepolicy"));
    var updateButton = (<HTMLButtonElement>document.getElementById("update"));
    if (data) {
      this.PolicyId = data.PolicyId;
      this.PolicyCategory = data.PolicyCategory;
      this.PolicyPremium = data.Premium;
      this.formheader = "Edit Policy"
      saveButton.hidden =true;
      updateButton.hidden =false;
    }
    else {
      this.formheader = "Add Policy";
      saveButton.hidden =false;
      updateButton.hidden =true;
    }
  }

  clearform() {
    this.PolicyId = null;
    this.PolicyCategory = null;
    this.PolicyPremium = null;
  }

  closeform() {
    this.showform = false;
    this.clearform()
  }


  showPolicies(): void {
    this.policyGetApi.getpolicy().subscribe(
      (data: any[]) => {
        this.policies = data;
      },
      (error) => {
        console.log('Error fetching policies:', error);
        
      })
  }

  savepolicy() {
    this.showform = false;
    let body = {
      policyid: this.PolicyId,
      policycategory: this.PolicyCategory,
      premium: this.PolicyPremium,
    }
    // console.log(body);
    this.policyGetApi.postpolicy(body).subscribe(
      (res) => {
        this.showPolicies();
      },
      (error) => {
        console.log("error while adding policy to server", error);
      }
    )
  }

  update() {
    this.showform = false;
    let body = {
      policyid: this.PolicyId,
      policycategory: this.PolicyCategory,
      premium: this.PolicyPremium,
    }
    // console.log(body);
    this.policyGetApi.putpolicy(body).subscribe(
      (res) => {
        this.showPolicies();
      },
      (error) => {
        console.log("error while updating the policy.", error);
      })
  }

  deletePolicy(id: any) {
    // alert("Your id is" + id);
    this.policyGetApi.deletepolicy(id).subscribe(
      res => {
        this.showPolicies();
      },
      (error) =>{
        console.log("error while deleting the policy.", error);
        
      })
  }
}
