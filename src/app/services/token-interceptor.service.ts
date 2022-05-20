import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { VerifyService } from './verify.service';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  refresh = false;
  constructor(private authService: VerifyService) {}

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
   // let authService = this.injector.get(VerifyService);
    request = this.addToken(request, this.authService.getToken());
    console.log('Intercept', request);
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse || error.status === 0) {
          return this.handleError(request, next);
        } else {
          console.log("object");
          return throwError(error);
        }
      })
    );
  }

  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  private handleError(request: HttpRequest<any>, next: HttpHandler) {
    
    if (!this.refresh) {
      this.refresh = true;
      this.refreshTokenSubject.next(null);
      console.log("Handling Error ---2");
      return this.authService.refreshToken().pipe(
        switchMap((newTokens: any) => {
          this.refresh = false;
          this.refreshTokenSubject.next(newTokens.accessToken);
          console.log('tokenswer', newTokens);
          localStorage.setItem('token', newTokens.accessToken);
          return next.handle(
            this.addToken(request, this.authService.getAccessToken())
          );
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((jwt) => {
          console.log('jwt', jwt);
          return next.handle(this.addToken(request, jwt));
        })
      );
    }
  }

  private addToken(request: HttpRequest<any>, token: any) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }













  

  // constructor(private injector: Injector) { }

  // intercept(req: any, next: any){
  //   let verifyService = this.injector.get(VerifyService);
  //   let tokenizedReq = req.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${verifyService.getToken()}`
  //     }
  //   })
  //   return next.handle(tokenizedReq)
  // }
}
