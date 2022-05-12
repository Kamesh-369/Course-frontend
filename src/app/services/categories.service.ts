import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }


  getCategories(cour:any){
    console.log("hiiiiii");

    return this.http.get(`http://localhost:3000/api/user/view/${cour}`);

  }

  getCourse(cour:any,cours:any){
    console.log("Now in use case 4");
    
    return this.http.get(`http://localhost:3000/api/user/view/${cour}/${cours}`)
  }

  adminCourse(){
    return this.http.get('http://localhost:3000/admin/view')
  }
}
