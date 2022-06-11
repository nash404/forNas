import { Component, OnInit } from '@angular/core';
import { PaintService } from '../paint.service';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css']
})
export class AdminReviewComponent implements OnInit {
  name!:String;
  text!:String;
  constructor(private paintService:PaintService) { }

  ngOnInit(): void {
  }
  rewiewAddClick(){
    const review ={
      name:this.name,
      text:this.text
    };
  
  this.paintService.postReview(review).subscribe(data =>{
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
