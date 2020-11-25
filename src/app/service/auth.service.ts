import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable, Component } from '@angular/core';
import { rejects } from 'assert';
import {Observable, of} from 'rxjs';
import {tap, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  constructor(private router: Router) {  }

 login(username: string, password: string){

   if(username=="admin" && password== "admin" || username=="kevin" && password=="kevin"){
    localStorage.setItem('currentUser', "loggedin");
    return true;
   }
   else
   {
     this.router.navigate(['/login']);
   }
 }
 logout(){
  localStorage.removeItem('currentUser');
 }

 public get loggedin(): boolean{
   return (localStorage.getItem('currentUser')!== null);
 }
}
