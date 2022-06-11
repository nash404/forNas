import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteLikeService {

  constructor(private http: HttpClient) { }
  
  deletePost(id: any){
    return this.http.post('/api/post/delete',{id : id})
}
}
