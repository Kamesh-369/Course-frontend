import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  url!:any;
  constructor(private userService: CategoriesService, private router:Router,private route: ActivatedRoute) { }


  onSubmit(value: any){
    this.route.params.subscribe(val => {
      this.url=val["id"]
    this.userService
      .updateCourse(value.mail, value.pwd, value.durartion,value.iName, value.idetails,value.overview,this.url)
      .subscribe({
        next: (data) => {
          console.log(data);
          alert("Updated");

  }}
      )})


  

}

  ngOnInit(): void {

    console.log(" testinggggggggggggggggggggggggggg");
  }

}
