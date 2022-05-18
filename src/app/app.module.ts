import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { VerifyService } from './services/verify.service';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AdminCourseviewComponent } from './admin-courseview/admin-courseview.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SecondUsecaseComponent,
    BusinessComponent,
    TopCategoriesComponent,
    UseCaseFourComponent,
    AdminComponent,
    HomeComponent,
    AdminCourseviewComponent,
    WelcomeComponent,
    ProfileComponent,
    EditCourseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',

      preventDuplicates: true,
      closeButton: true,
    }),
  ],
  providers: [AuthGuard,VerifyService,
  {
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
