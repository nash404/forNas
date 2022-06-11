import { Injectable } from '@angular/core';
import { Paint } from './paints';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Paint[] = [];

  constructor(private http: HttpClient) { }

  addToCart(paint: Paint) {
    this.items.push(paint);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
}
