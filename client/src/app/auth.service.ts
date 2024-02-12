import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public HttpClient:HttpClient) { }




  public query_Url="http://localhost:3005/api/policyquery";

getquery(){

  return this.HttpClient.get(this.query_Url)
}

postquery(data:any){
  return this.HttpClient.post(this.query_Url,data)
}

putquery(data:any){
  return this.HttpClient.put(this.query_Url,data)
}
}
