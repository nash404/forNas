import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LikeService } from '../like.service';
import { FavvService } from '../favv.service';
import { PaintService } from '../paint.service';
import {PaintDataService} from '../paint-data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  login!:String;
  art:PaintDataService[]=[];
  name!: String;
  filtered:PaintDataService[] = this.art;
  //like=this.likeService.getLike();
  Favor:FavvService[]=[];
  filteredProducts:FavvService[] = this.Favor;
  constructor(
    private router:Router,
    private authService: AuthService,
    private likeService:LikeService,
    private favvService:FavvService,
    private paintService:PaintService,
    private paintDataService:PaintDataService
  ) { }

  ngOnInit(): void {
    this.likeService.getLike().forEach(paints => {
      
      paints.forEach((value: any) => {
        
          if(value.user===JSON.parse(localStorage.getItem('user') || '{}').login)
          {
            this.filteredProducts.push(value);// console.log(value);
            this.paintService.getPaints().forEach(likes=>{
              //this.art = likes as PaintDataService[];
             likes.forEach((get:any)=>{
                
                if(value.paintt===get.name)
                {
                  this.filtered.push(get);
                 // console.log(get);
                }
              })
              
            });
          }
      });
      
    });
  }
  ser=JSON.parse(localStorage.getItem('user') || '{}').login;
  
  onDelete(name:any){ 
    /*this.likeService.getLike().subscribe(paints => {
      
      paints.forEach((value: any) => {
        
          if(value.user===JSON.parse(localStorage.getItem('user') || '{}').login)
          {
            this.paintService.getPaints().forEach(likes=>{
              //this.art = likes as PaintDataService[];
             likes.forEach((get:any)=>{
                
                if(value.paintt===get.name)
                {*/
                const del={
                  user:JSON.parse(localStorage.getItem('user') || '{}').login,
                  paintt:name
                }
                /*this.likeService.getLike().subscribe(paints => {
      
                  paints.forEach((value: any) => {
                    if(value.paintt===del.paintt)
                    {  */
                  console.log(del);
    this.likeService.deleteLike(del);
   // return this.router.navigate(['favorite']);
    window.location.reload();
             //   });
             // });
           /* }
          });
        });*/
  }  
  /*filterChange() {
    this.filteredProducts = this.paint.filter(x => 
       (x.theme === 'People' && this.filter.People)*/
logoutUser(){
    this.authService.logout();
    window.alert('You are logged out');
    console.log("You are logged out");
    this.router.navigate(['/auth']);
    return false;
  }

}
