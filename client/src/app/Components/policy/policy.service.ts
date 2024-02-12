import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

//   public policy_Url ="http://localhost:3005/api/PolicyDetails";
  constructor(public HttpClient:HttpClient) { }

  getpolicy(){
    return this.HttpClient.get<any[]>('http://localhost:3005/api/getPolicies');
  }


  postpolicy(body:any){    
    return this.HttpClient.post('http://localhost:3005/api/addPolicy',body)
  }

  putpolicy(body:any){
    return this.HttpClient.put('http://localhost:3005/api/updatePolicy',body)
  }

  deletepolicy(id:any){
    return this.HttpClient.delete('http://localhost:3005/api/deletePolicy/'+id)
  }
}