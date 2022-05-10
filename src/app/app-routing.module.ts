import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard/auth.guard';
import { BusinessComponent } from './business/business.component';
// import { DevelopmentComponent } from './development/development.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UseCaseFourComponent } from './use-case-four/use-case-four.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent  },
  {path:'course/:category', component:BusinessComponent, 
  canActivate:[AuthGuard] 
},
  {path: ':category/:course', component:UseCaseFourComponent, canActivate:[AuthGuard] }  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
