import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { SecondUsecaseComponent } from './second-usecase/second-usecase.component';
import { BusinessComponent } from './business/business.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UseCaseFourComponent } from './use-case-four/use-case-four.component';
import { AuthGuard } from './authGuard/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SecondUsecaseComponent,
    BusinessComponent,
    TopCategoriesComponent,
    UseCaseFourComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
