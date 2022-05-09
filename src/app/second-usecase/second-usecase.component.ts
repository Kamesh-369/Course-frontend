import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-second-usecase',
  templateUrl: './second-usecase.component.html',
  styleUrls: ['./second-usecase.component.css']
})
export class SecondUsecaseComponent implements OnInit {
  

  category:any=[];
  constructor(private _categoryservice:CategoriesService) { }

  ngOnInit(): void {
   // this._categoryservice.getCategories().subscribe((result:any)=>{this.category=result});

  }


}
