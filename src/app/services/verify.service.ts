import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpClient,   HttpErrorResponse,   HttpHeaders,} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  
  base_url='http://13.235.86.14:3000'
  authToken: any;
  user: any;
  constructor(private http: HttpClient, private router: Router) { }

  loginUser(email: string, password: string): Observable<any> {
    console.log(this.base_url);
    return this.http.post(this.base_url+'/api/user/login', {
      email,
      password,
    });
  }


  registerUser(username: string,email: string,password: string,phonenumber: string,userType:string): Observable<any> {
    return this.http.post(this.base_url+'/api/user/register', {
      username,
      email,
      password,
      phonenumber,
      userType
    });
  }

  courseUpload(category:string,courseName:string,duration:string,instructor:string,instructorDetails:string,overview:string): Observable<any>{
     return this.http.post(this.base_url+'/admin/courseupdate', {
       category,
       courseName,
       duration,
       instructor,
       instructorDetails,
       overview
     })
   }  

  storeUserData(token: string, ref_token:string) {
    localStorage.setItem('token', token );
    localStorage.setItem('ref_token', ref_token);
    //localStorage.setItem('user', name);
    this.authToken = token;
    //this.user = name;
  }

  loggedIn(){
    
    return !!localStorage.getItem('token');
  }


  isAdmin(){
    if(!localStorage. getItem("token"))
    {
      return false
    }
    const Role = localStorage. getItem("token");
      let jwtData = Role!.split('.')[1]
      let decodedJwtJsonData = atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      let isAdmin  = decodedJwtData.userType

      console.log(isAdmin+"Check func");
      if(isAdmin == "admin"){
        return true;
             
      }
      else{
        //alert("Not allowed");
        return false;
      }
  }

  userRole(){
    const Role = localStorage. getItem("token");
      let jwtData = Role!.split('.')[1]
      let decodedJwtJsonData = atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      let email  = decodedJwtData.email;
      return email;
  }

  userMail(){
    const Role = localStorage. getItem("token");
    let jwtData = Role!.split('.')[1]
    let decodedJwtJsonData = atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    let isAdmin  = decodedJwtData.userType
    return isAdmin;

  }


  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('ref_token')
    localStorage.removeItem('jwt_token')

    this.router.navigate([''])
  }

  getRefreshToken() {
    return localStorage.getItem('ref_token');
  }

  refreshToken() : Observable<any>{
    console.log("refreshtokenbody");
    return this.http.post(this.base_url+'/api/user/token', {
      mail:this.userRole(),
      role:this.userMail(),
      refreshToken: this.getRefreshToken(),
    });
  }


  getAccessToken() {
    return localStorage.getItem('token');
  } 

}




