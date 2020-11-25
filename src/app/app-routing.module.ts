import { AuthGuard } from './auth/auth.guard';
import { from, } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { PasswordComponent } from './components/password/password.component';
import {LoginComponent} from './components/login/login.component';
import {NotificationComponent} from './components/notification/notification.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'notification', component: NotificationComponent},
  { path: 'home', component: HomeScreenComponent, canActivate: [AuthGuard],
children: [
  {path: ':qid', component: HomeScreenComponent}
]},
  {path: 'password', component: PasswordComponent, canActivate: [AuthGuard]},

  { path: '', redirectTo: '/login', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
