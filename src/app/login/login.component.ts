import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private userService: VerifyService, private router:Router , private toastr: ToastrService ) { }

  loginUser(item: any) {
    console.warn(item);
  }
  onSubmit(value:any){

    console.log(value);
    const email=value.mail;
    console.log(email);

    this.userService.loginUser(value.mail,value.pwd).
    subscribe({
      next: (result: any) => {
        console.log(result);
        this.userService.storeUserData(result.token);
        localStorage.setItem('token',result.token);
      },
      error: (error:any) => {
        console.log(error);
        this.toastr.error('Login Failure', '', {
          timeOut: 2000,
          progressBar: true,
          progressAnimation: 'decreasing',
        }
    )}
  })
  //this.router.navigate(['']);
 
  

}

ngOnInit(): void { }
}
