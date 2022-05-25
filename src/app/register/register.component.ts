import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username!: string;
  password!: string;
  email!: string;
  phonenumber!: string;

  constructor(private userService: VerifyService,  private router: Router, private toastr: ToastrService) { }

  registerUser(item: any) {
    console.warn(item);

  }

  onSubmit(value: any){
    this.userService
      .registerUser(value.uname, value.mail, value.pwd, value.phone)
      .subscribe({
        next: (data) => {
          console.log(data.msg);
          this.toastr.success('Registration Success', 'New User registered', {
            timeOut: 2000,
            progressBar: true,
            progressAnimation: 'decreasing',
          }
      )
      this.router.navigate(['/login']);

  },
  error: (error:any) => {
    console.log(error);
    console.log("error captured");
    this.toastr.error('Registration Failure', 'Mail already registered', {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'decreasing',
    },   
)     
//window.location.reload();
}
})
//this.router.navigate(['/login']);

  

}

ngOnInit(): void {}
}