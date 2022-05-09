import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  category:any=[];
  url!: any

  constructor(private _categoryservice:CategoriesService,
    private route: ActivatedRoute,) 
    {
      //  console.log("hello");
      // let course = this.route.snapshot.paramMap.get('category');
      // console.log("object"); 
      this.route.params.subscribe(value => {
        this.url=value["category"]
        this._categoryservice
        .getCategories(this.url).subscribe((result:any)=>{this.category=result});})
       
    }
  

  ngOnInit(): void {

    

  }

}
