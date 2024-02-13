import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppliedPolicyService {

//   public policy_Url ="http://localhost:3005/api/PolicyDetails";
  constructor(public HttpClient:HttpClient) { }

  viewappliedpolicy(){
    return this.HttpClient.get<any[]>('http://localhost:3005/api/getAppliedPolicies');
  }

  updateappliedpolicy(Id: Number,body:any){
    return this.HttpClient.put(`http://localhost:3005/api/updateAppliedPolicy/${Id}`, body)
  }
}