import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  constructor(private router: Router){ }

  canActivate(
    ) {
      
      
      const Role = localStorage. getItem("token");
      const token= JSON.parse(atob(Role!.split('.')[1]))

      let jwtData = Role!.split('.')[1]
      let decodedJwtJsonData = atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      let isAdmin = decodedJwtData.userType


      console.log(isAdmin);
      if(isAdmin == "admin"){
        return true;
             
      }
      else{
        alert("Not allowed");
        return false;
      }
      
      

  }
  
}
