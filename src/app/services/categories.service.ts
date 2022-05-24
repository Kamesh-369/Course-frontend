import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  base_url='http://13.235.86.14:3000'

  constructor(private http:HttpClient) { }



  getCategories(cour:any){
    

    return this.http.get(this.base_url+`/api/user/view/${cour}`);

  }

  getCourse(cour:any,cours:any){
    console.log("Now in use case 4");
    
    return this.http.get(this.base_url+`/api/user/view/${cour}/${cours}`)
  }

  adminCourse(){
    return this.http.get(this.base_url+'/admin/view')
  }

  enrollCourse(email:any,course:any){
    return this.http.post(this.base_url+'/api/user/view/enroll',{email:email,courseName:course})
  }

  viewProfile(email:any){
    return this.http.get(this.base_url+`/api/user/profile/${email}`);
  }

  deleteCourse(courseName:any){
    return this.http.delete(this.base_url+`/admin/view/${courseName}`)
  }

  updateCourse(category:string,courseName:string,duration:string,instructor:string,instructorDetails:string,overview:string,id:any){
    return this.http.put(this.base_url+`/admin/view/${id}`,{
       category,
       courseName,
       duration,
       instructor,
       instructorDetails,
       overview
    })
  }
}
