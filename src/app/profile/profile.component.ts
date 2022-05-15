import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  category:any=[];

  constructor(private _categoryservice:CategoriesService) { }


  profileView(){
    const Role = localStorage. getItem("token");
    let jwtData = Role!.split('.')[1]
    let decodedJwtJsonData = atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    let email  = decodedJwtData.email;
    console.log(email);


    this._categoryservice.viewProfile(email)
    .subscribe((result:any)=>{this.category=result}
      
      )};

  ngOnInit(): void {
  }

}
