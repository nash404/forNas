import { Component, OnInit } from '@angular/core';
import { PaintService } from '../paint.service';
import { DOCUMENT } from '@angular/common';
import { Inject }  from '@angular/core';
import {PaintDataService} from '../paint-data.service';
import {LikeService} from '../like.service';
import {Router} from '@angular/router';
//import { paints } from '../paints';

declare var $: any;
declare var arbor: any;

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements OnInit {
  //selectedItemsList:PaintDataService[] = [];
  /*Categories and product list
  ProductData: any = [];
  // List to filter
  DisplayProductList: any = [];
paints=paints;*/
user!: String;
paintt!:String;



  constructor(
    private router:Router,
    private paintService:PaintService,
    private paintDataService:PaintDataService,
    private likeService:LikeService
  ) {}
   
  /*fetchSelectedItems() {
    this.selectedItemsList = this.paint.filter((value, index) => {
      return value.isChecked;
    });
  }*/
  like = { like: false};
  filter = { People: false, Flowers: false, Still_life: false, Landscapes: false ,Animals:false,Abstract:false};
  paint:PaintDataService[]=[];
  filteredProducts:PaintDataService[] = this.paint;

  filterChange() {
    this.filteredProducts = this.paint.filter(x => 
       (x.theme === 'People' && this.filter.People)
       || (x.theme === 'Flowers' && this.filter.Flowers)
       || (x.theme === 'Still life' && this.filter.Still_life)
       || (x.theme === 'Landscapes, sea and sky' && this.filter.Landscapes)
       || (x.theme === 'Animals' && this.filter.Animals)
       || (x.theme === 'Abstract' && this.filter.Abstract)
    );
    if(this.filter.People==false&&this.filter.Flowers==false&&this.filter.Still_life==false&&this.filter.Animals==false&&this.filter.Landscapes==false&&this.filter.Abstract==false)
    {
      this.filteredProducts=this.paint;
    }
  }
  public isVerdana: boolean=false;
  public isVerda: boolean=false;
  ooo:any;
  k:number=0;
  ngOnInit(): void {
   
    this.paintService.getPaints().subscribe(paints => {
      this.paint = paints as PaintDataService[];
      this.filteredProducts=paints as PaintDataService[];
      this.likeService.getLike().forEach(pain => {
        pain.forEach((get:any)=>{

        
       // console.log(paints);
        //console.log(pain);
            if(get.user===JSON.parse(localStorage.getItem('user') || '{}').login)
            {
              //paints.isChecked=true;
              paints.forEach((value:any)=>{
              if(get.paintt==value.name)
              {
                //console.log(value);
                //console.log(get);
                //console.log(pain);
                value.isChecked=true;
              }
            });
          }
         
        })
          });
          if(paints.status=="NEW")
          {
            this.isVerdana=true;
          }
          else if(paints.status=="SOLD")
          {
            this.isVerdana=false;
          }
        });
  


   $('.scroll_top').click(function(){
      $('html, body').animate({scrollTop: 0}, 1000);
      });
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $('.scroll_top').addClass('active');
        }
        else{
            $('.scroll_top').removeClass('active');
        }
    });

  }
  yes!:boolean;
  userLikeClick(pai:any){
   /* this.paintService.getPaints().subscribe(paints => {
      this.likeService.getLike().forEach(pain => {
        
              //paints.isChecked=true;
              paints.forEach((value:any)=>{
                console.log(paints);
                if(pain.paintt!=value.name)
                {
                  this.yes=true;
                }
                else {
                  this.yes=false;
                }
              
            
        })
          });
        });*/
      this.yes=false;
      
      const fav ={
        user:JSON.parse(localStorage.getItem('user') || '{}').login,
        paintt:pai
      };
      const del ={
        user:JSON.parse(localStorage.getItem('user') || '{}').login,
        paintt:pai
      };
      //let shouldSkip = false;
      this.likeService.getLike().forEach(pain => {
        console.log(pain);
        if(pain.user==undefined)
        {
          for(const get of pain)
          {

          console.log(get);
       /* pain.some((get:any)=>
        {*/
                 if(get.paintt!=pai) 
                 {
                   console.log(get.paintt);
                   if(!this.yes){
                   
                  this.likeService.likeUser(fav).subscribe(data =>{
                    if(!data.success){
                      window.alert(data.msg);
                    }else{
                      window.alert(data.msg);
                      
                     // window.location.reload();
                    }
                    window.location.reload();
                    });
                   

                  }
                  this.yes=true; 
                  
                 }
                 else{
                   
                  console.log(del);
                  this.likeService.deleteLike(del);
                  
                  //this.yes=true;
                  window.alert('This picture has already been added to favorites');
                  window.location.reload();
                  return;
                 }
                this.k=1;
             // return;
          }
        }
        return;
            });  
}
}
