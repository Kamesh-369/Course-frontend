import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { Router }from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-courseview',
  templateUrl: './admin-courseview.component.html',
  styleUrls: ['./admin-courseview.component.css']
})
export class AdminCourseviewComponent implements OnInit {

  public courses:any = [];
  constructor(private _categoryservice:CategoriesService,
    private route: ActivatedRoute, private router:Router) {  }

  ngOnInit(): void {

    this._categoryservice.adminCourse()
        .subscribe(data => this.courses = data)
  }

}
