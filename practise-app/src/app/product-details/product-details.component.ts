import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { Product, products } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartSvc: CartServiceService
  ) { }

  ngOnInit(): void {
    const routeInfo = this.activatedRoute.snapshot.paramMap;
    const pId = Number(routeInfo.get('productId'));
    this.product = products.filter(product=> product.id === pId)[0];
  }
  addToCart(){
    this.cartSvc.addToCart(this.product);
  }
}
