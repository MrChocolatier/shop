import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../model/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;

  @Output() removeFromCart = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit() {}

  onRemoveFromCart() {
    this.removeFromCart.emit(this.cartItem);
  }
}
