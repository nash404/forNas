import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { PaintService } from '../paint.service';


declare var $: any;
declare var arbor: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paint$!:any;
  constructor(private modalService: MdbModalService,
    private paintService:PaintService) { }
  @ViewChild('openModal',{ static: true })openModal!: ElementRef;
  ngOnInit(): void {
    
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
    
    
    this.openModal.nativeElement.click();
    this.paintService.getPaints().forEach(element => {
      element.forEach((value: any) => {
        if(value.status==='NEW') {this.paint$ = value; console.log(value);}
      });
    });
  }

}
