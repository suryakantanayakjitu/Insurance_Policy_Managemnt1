import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyDetailsService {

  constructor(public HttpClient:HttpClient) { }

  getpolicydetails(){
    return this.HttpClient.get<any []>('http://localhost:3005/api/getPolicyHolderDetails');
  }


  postpolicydetails(body:any){    
    return this.HttpClient.post('http://localhost:3005/api/addPolicyHolder',body)
  }

  putpolicydetails(body:any){
    return this.HttpClient.put('http://localhost:3005/api/updatePolicyHolder',body)
  }

  deletepolicydetails(id:any){
    return this.HttpClient.delete('http://localhost:3005/api/deletePolicyHolder/'+id)
  }
}