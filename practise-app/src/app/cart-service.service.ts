import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public items: any = [];

  constructor(
    private http: HttpClient
  ) { }
  addToCart(product:any){
    this.items.push(product);
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getCartItems(){
    return this.items;
  }
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
