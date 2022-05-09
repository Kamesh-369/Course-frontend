import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: VerifyService,  private router: Router) { }

  registerUser(item: any) {
    console.warn(item);

  }

  onSubmit(value: any){
    this.userService
      .registerUser(value.uname, value.mail, value.pwd, value.phone)
      .subscribe({
        next: (data) => {
          console.log(data.msg);

  }
})
this.router.navigate(['/login']);

  

}

ngOnInit(): void {}
}