import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../product/model/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Product;

  @Output() removeFromCart = new EventEmitter<Product>();

  constructor() {}

  ngOnInit() {}

  onRemoveFromCart() {
    this.removeFromCart.emit(this.cartItem);
  }
}
