import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }


  getCategories(cour:any){
    console.log("hiiiiii");

    return this.http.get(`http://localhost:3000/api/user/view/${cour}`);

  }
}
