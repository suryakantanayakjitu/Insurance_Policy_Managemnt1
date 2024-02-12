import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public HttpClient:HttpClient) { }

  validate(body:any){
    return this.HttpClient.post('http://localhost:3005/api/loginvalidate', body);
  }

  signup(body:any){    
    return this.HttpClient.post('http://localhost:3005/api/signUp',body)
  }

  username: string ="";

  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  };
}