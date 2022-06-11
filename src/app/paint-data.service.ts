import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaintDataService {

  constructor() { }

  name!:String;
  material!:String;
  size!:String;
  price!:number;
  foto!:String;
  style!:String;
  theme!:String;
  isChecked!:Boolean;
  status!:String;
}
