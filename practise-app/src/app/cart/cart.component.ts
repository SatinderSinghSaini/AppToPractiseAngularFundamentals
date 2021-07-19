import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items:any=[];
  public checkOutForm: any;

  constructor(
    private cartSvc:CartServiceService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.items = this.cartSvc.getCartItems();
    this.checkOutForm = this.fb.group({
      name:'',
      address:''
    });
    
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartSvc.clearCart();
    console.warn('Your order has been submitted', this.checkOutForm.value);
    this.checkOutForm.reset();
  }

}
