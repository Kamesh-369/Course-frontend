import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpClient,   HttpErrorResponse,   HttpHeaders,} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  
  authToken: any;
  user: any;
  constructor(private http: HttpClient, private router: Router) { }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/api/user/login', {
      email,
      password,
    });
  }


  registerUser(username: string,email: string,password: string,phonenumber: string): Observable<any> {
    return this.http.post('http://localhost:3000/api/user/register', {
      username,
      email,
      password,
      phonenumber,
    });
  }

  storeUserData(token: string,) {
    localStorage.setItem('token', token);
    //localStorage.setItem('user', name);
    this.authToken = token;
    //this.user = name;
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }


  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }


}




