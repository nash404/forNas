import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  likeUser(fav:any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.post('https://artplakhotnyknatali.herokuapp.com/account/favorite',
    fav,
    {headers: headers}).pipe(map((response: any) => response));
  }
  

  getLike(/*login:any*/){
    let headers = new HttpHeaders();
    headers.append('Content-Type', "applicaton/json");
    return this.http.post('https://artplakhotnyknatali.herokuapp.com/account/getfavorite',
    /*login,*/
    {headers: headers}).pipe(map((response: any) => response));
  }

  deleteLike(name:any){
    //console.log("Deleted "+name);  
    this.http.post("https://artplakhotnyknatali.herokuapp.com/account/delete",name)
    .subscribe(()=>{  
      console.log("Deleted "+name);  
  }); 
   
  }
}
