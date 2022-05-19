import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';


// const routes: Routes=[
//   {path: "login", component: LoginComponent}
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
