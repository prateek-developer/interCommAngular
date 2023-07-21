import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  _url = `https://localhost:44318/api/User/SignUP`;
  _LoginUrl='https://localhost:44318/api/Login/authenticate';

  constructor(private _http: HttpClient , private router :Router) { }

  register(userData: any){
    return this._http.post<any>(this._url, userData);
  }

  LoginUser(userData:any){
    return this._http.post<any>(this._LoginUrl , userData);
  }

  
  
  logout(){
    localStorage.clear();
    this.router.navigate(['Login']);

  }
 

  storeToken(tokenValue: string){
    localStorage.setItem('token' , tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }


  
}
