import { Component, OnInit } from '@angular/core';
import { PaintService } from '../paint.service';

@Component({
  selector: 'app-admin-paint',
  templateUrl: './admin-paint.component.html',
  styleUrls: ['./admin-paint.component.css']
})
export class AdminPaintComponent implements OnInit {

name!:String;
material!:String;
size!:String;
price!:Number;
foto!:String;
style!:String;
theme!:String;
status!:String;

  constructor(private paintService:PaintService) { }

  ngOnInit(): void {
  }
  paintAddClick(){
    const paint ={
      name:this.name,
      material:this.material,
      size:this.size,
      price:this.price,
      foto:this.foto,
      style:this.style,
      theme:this.theme,
      isChecked:false,
      status:this.status
    };
  
  
  this.paintService.postPaint(paint).subscribe(data =>{
    if(!data.success){
      window.alert(data.msg);
    }else{
      window.alert(data.msg);
      window.location.reload();
    }

  });
  return;
  }
}
