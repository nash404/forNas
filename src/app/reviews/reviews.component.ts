import { Component, OnInit } from '@angular/core';
import { PaintService } from '../paint.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private paintService:PaintService) { }

  review=this.paintService.getReview();
  ngOnInit(): void {
  }

}
