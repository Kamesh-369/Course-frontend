import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VerifyService } from '../services/verify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private verifyServive: VerifyService,
    private router: Router) { }


  canActivate(): boolean{
    if(this.verifyServive.loggedIn())
    {
      return true;
    }

    else{
      this.router.navigate(['/login']);
      return false;
    }

  }  
  
}
