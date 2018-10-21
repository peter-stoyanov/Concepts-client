import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes = [
    { path: '', component: DashboardComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'users', component: UsersComponent },
    // { path: 'profile/:id', component: ProfileComponent }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }