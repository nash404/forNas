import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaintService {
data:any;
  constructor(private http: HttpClient) { }

  getPaints(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.get('https://artplakhotnyknatali.herokuapp.com/account/paint',
    {headers: headers}).pipe(map((response: any) => response));
  }
  postPaint(paint:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.post('https://artplakhotnyknatali.herokuapp.com/account/postPaint',
    paint,
    {headers: headers}).pipe(map((response: any) => response));
  }
  /////////////////
  getReview(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.get('https://artplakhotnyknatali.herokuapp.com/account/review',
    {headers: headers}).pipe(map((response: any) => response));
  }
  postReview(review:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.post('https://artplakhotnyknatali.herokuapp.com/account/postReview',
    review,
    {headers: headers}).pipe(map((response: any) => response));
  }
}
