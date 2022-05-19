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
    request = this.addToken(request, this.authService.getToken());
    console.log('Intercept', request);
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse ) {
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
      console.log("Handling Error ---2");
      return this.authService.refreshToken().pipe(
        switchMap((newTokens: any) => {
          console.log('tokenswer', newTokens);
          localStorage.setItem('token', newTokens.accessToken);
          return next.handle(
            this.addToken(request, this.authService.getAccessToken())
          );
        })
      );
    } else {
      console.log("Getting into jwt");
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

  private addToken(req: HttpRequest<any>, token: any) {
    return req.clone({
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
