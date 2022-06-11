import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
//import {tokenNotExpired} from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:any;
  user:any;

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.post('https://artplakhotnyknatali.herokuapp.com/account/reg',
    user,
    {headers: headers}).pipe(map((response: any) => response));
  }
  gettUser(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.get('https://artplakhotnyknatali.herokuapp.com/account/getUser',
    {headers: headers}).pipe(map((response: any) => response));
  }
  ///////////////////////////////////////
  authUser(user:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.post('https://artplakhotnyknatali.herokuapp.com/account/auth',
    user,
    {headers: headers}).pipe(map((response: any) => response));
  }
  updateName(user:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.post('https://artplakhotnyknatali.herokuapp.com/account/updateName',
    user,
    {headers: headers}).pipe(map((response: any) => response));
  }
  updateEmail(user:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.post('https://artplakhotnyknatali.herokuapp.com/account/updateEmail',
    user,
    {headers: headers}).pipe(map((response: any) => response));
  }
  updatePassword(user: any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.post('https://artplakhotnyknatali.herokuapp.com/account/updateUserPassword',
    user,
    {headers: headers}).pipe(map((response: any) => response));
  }
  ////////////////////////////////////////
  storeUser(token: any,user: any){
  localStorage.setItem('token',token);
  localStorage.setItem('user', JSON.stringify(user));
  this.token=token;
  this.user=user;
  }
  ////////////////////////////////////////
  logout(){
    this.token=null;
    this.user=null;
    localStorage.clear();
  }

  isLoggedIn():any{
    if(localStorage.getItem('token')!=undefined)
    return true;
    
  }
}
