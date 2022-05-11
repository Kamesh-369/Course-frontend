import { Component, OnInit } from '@angular/core';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private userService: VerifyService  ) { }

  loginUser(item: any) {
    console.warn(item);
  }
  onSubmit(value:any){

    console.log(value);
    const email=value.mail;
    console.log(email);

    this.userService.loginUser(value.mail,value.pwd).subscribe({
      next: (result: any) => {
        console.log(result);
        this.userService.storeUserData(result.token);
        localStorage.setItem('token',result.token);
      }
  });
 
  

}

ngOnInit(): void { }
}
