import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
public shippingCosts: any=[];
  constructor(
    private cartSvc: CartServiceService
  ) { }

  ngOnInit(): void {
    this.cartSvc.getShippingPrices().subscribe(data=>{
      this.shippingCosts = data;
    });
  }

}
