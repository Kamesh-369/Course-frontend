import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private userService: VerifyService) { }


  onSubmit(value: any){
    this.userService
      .courseUpload(value.mail, value.pwd, value.durartion,value.iName, value.idetails,value.overview)
      .subscribe({
        next: (data) => {
          console.log(data.msg);
          alert("Uploaded");

  }
})


  

}

  ngOnInit(): void {
  }

}
