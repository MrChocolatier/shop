import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../model/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  itemsInCart: CartItem[] = [];
  totalPrice: number;
  totalQuantity: number;

  private itemsSub: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.itemsSub = this.cartService.cartItems$.subscribe((items: CartItem[]) => {
      this.itemsInCart = items;
      this.calculateCartTotal();
    });
  }

  ngOnDestroy() {
    this.itemsSub.unsubscribe();
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item.product);
  }

  private calculateCartTotal() {
    this.totalPrice = 0;
    this.totalQuantity = 0;
    this.itemsInCart.forEach((item) => {
      this.totalPrice += item.product.price * item.quantity;
      this.totalQuantity += item.quantity;
    });
  }
}
