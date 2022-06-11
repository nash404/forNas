import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaintComponent } from '../paint/paint.component';
import { PaintService } from '../paint.service';
//import { Paint, paints } from '../paints';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})

export class WindowComponent implements OnInit {
  private buttonSubmitEnabled: boolean = false; 
 // paint: Paint | undefined;
  paint$!:any;
  constructor(
    private paintService:PaintService,
    private route: ActivatedRoute,
    private cartService: CartService) { }
    addToCart() {
      this.cartService.addToCart(this.paint$);
      window.alert('Your product has been added to the cart!');
    }
  ngOnInit(): void {
    this.paintService.getPaints().forEach(element => {
      element.forEach((value: any) => {
        if(value.name===this.route.snapshot.params['name']) {this.paint$ = value; console.log(value);}
      });
    });
    /*const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('paintName'));
  
    // Find the product that correspond with the id provided in route.
    this.paint = paints.find(paint => paint.name === productIdFromRoute);*/
  }
  
  
  

}
