import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Router }from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-courseview',
  templateUrl: './admin-courseview.component.html',
  styleUrls: ['./admin-courseview.component.css']
})
export class AdminCourseviewComponent implements OnInit {

  securl:any ;
  public courses:any = [];
  constructor(private _categoryservice:CategoriesService,
    private route: ActivatedRoute, private router:Router, private toastr: ToastrService) {  }

  ngOnInit(): void {

    this._categoryservice.adminCourse()
        .subscribe(data => this.courses = data)
  }


  courseDelete(courseName:any){
    console.log(courseName);
    this._categoryservice.deleteCourse(courseName).subscribe((result:any)=>{console.log(result);},
   ); 

   this.toastr.warning('Course Deleted', '', {
    timeOut: 2000,
    progressBar: true,
    progressAnimation: 'decreasing',
  },
  
)  
      
    
  }


}
