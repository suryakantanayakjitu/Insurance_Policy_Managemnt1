import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PolicyDetailsService } from './policy-details.service';
import { error } from 'console';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrl: './policy-details.component.css'
})
export class PolicyDetailsComponent {
  policyHoldersDetails: any;
  showform: any;
  formheader: any;
  PolicyId: any;
  PolicyName: any;
  PolicyCategory: any;
  PolicyDescription: any;
  PolicyPremium: any;

  constructor(private http: HttpClient, public PolicyDetailsApi: PolicyDetailsService) { }

  ngOnInit(): void {
    // Fetch initial data if needed
    this.showPolicyHolders();
  }


  openform(data: any = null) {
    this.clearform();
    this.showform = true;
    var saveButton = (<HTMLButtonElement>document.getElementById("savepolicyholderDetails"));
    var updateButton = (<HTMLButtonElement>document.getElementById("updatedetails"));
    if (data) {
      this.PolicyId = data.PolicyId;
      this.PolicyName = data.PolicyName;
      this.PolicyCategory = data.PolicyCategory;
      this.PolicyDescription = data.PolicyDescription;
      this.PolicyPremium = data.PolicyPremium;
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
    this.PolicyName = null;
    this.PolicyCategory = null;
    this.PolicyDescription = null;
    this.PolicyPremium = null;
  }

  closeform() {
    this.showform = false;
    this.clearform()
  }

  showPolicyHolders(): void {
    this.PolicyDetailsApi.getpolicydetails().subscribe(
      (data: any[]) => {
        this.policyHoldersDetails = data;
      },
      (error) => {
        console.log('Error fetching Policy Holders Details:', error);
        
      });
  }


  savePolicyHolderDetails() {
    this.showform = false;
    let body = {
      policyid: this.PolicyId,
      policyname: this.PolicyName,
      policycategory: this.PolicyCategory,
      policydesc: this.PolicyDescription,
      policypremium: this.PolicyPremium,
    }
    // console.log(body);
    this.PolicyDetailsApi.postpolicydetails(body).subscribe(
      (res) => {
        this.showPolicyHolders();
      },
      (error) => {
        console.log("error while adding Policy Holders Details to server", error);
      }
    )
  }


  updatePolicyHolderDetails() {
    this.showform = false;
    let body = {
      policyid: this.PolicyId,
      policyname: this.PolicyName,
      policycategory: this.PolicyCategory,
      policydesc: this.PolicyDescription,
      policypremium: this.PolicyPremium
    }
    // console.log(body);
    this.PolicyDetailsApi.putpolicydetails(body).subscribe(
      (res) => {
        this.showPolicyHolders();
      },
      (error) => {
        console.log("error while updating the Policy Holders Details.", error);
      })
  }


  deletePolicyHolderDetails(id: any) {
    // alert("Your id is" + id);
    this.PolicyDetailsApi.deletepolicydetails(id).subscribe(
      res => {
        this.showPolicyHolders();
      },
      (error) =>{
        console.log("error while deleting the Policy Holders Details.", error);
        
      })
  }
}
