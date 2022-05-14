import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Router }from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-use-case-four',
  templateUrl: './use-case-four.component.html',
  styleUrls: ['./use-case-four.component.css']
})
export class UseCaseFourComponent implements OnInit {

  category:any=[];
  url!: any;
  securl:any;

  constructor(private _categoryservice:CategoriesService,
    private route: ActivatedRoute, private router:Router,
    private toastr: ToastrService) 
    {
      this.route.params.subscribe(value => {
        this.url=value["category"]
        this.securl=value["course"]
        this._categoryservice
        .getCourse(this.url,this.securl).subscribe((result:any)=>{this.category=result});},
        (err =>{
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              console.log(err);
              this.router.navigate(["/login"])
            }
          }
        } )
       
    ) }

    enrollCourse(){

      const Role = localStorage. getItem("token");
      let jwtData = Role!.split('.')[1]
      let decodedJwtJsonData = atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      let email  = decodedJwtData.email;
      console.log(email , this.securl);

      this._categoryservice.enrollCourse(email,this.securl)
      .subscribe((result:any)=>{console.log(result)
        this.toastr.success('Enrolled Successfuly', '', {
          timeOut: 2000,
          progressBar: true,
          progressAnimation: 'decreasing',
        });
      });
      
    }
  

  ngOnInit(): void { }

}