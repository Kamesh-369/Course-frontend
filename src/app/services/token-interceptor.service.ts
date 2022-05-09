import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { VerifyService } from './verify.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: any, next: any){
    let verifyService = this.injector.get(VerifyService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${verifyService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
