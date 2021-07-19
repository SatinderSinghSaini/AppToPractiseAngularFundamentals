import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products = products;

  constructor() { }

  ngOnInit(): void {
  }

  public share(){
    alert('Product have been shared');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
