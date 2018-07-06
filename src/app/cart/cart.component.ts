import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';
import { CartItem } from './../model/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart: CartItem[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.itemsInCart = this.cartService.getCartContents();
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item.product);
    this.itemsInCart = this.cartService.getCartContents();
  }
}
