import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../model/cart-item.model';
import { Cart } from '../../model/cart.model';

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
    this.itemsSub = this.cartService.cart$.subscribe((cart: Cart) => {
      this.itemsInCart = cart.items;
      this.totalPrice = cart.totalPrice;
      this.totalQuantity = cart.totalQuantity;
    });
  }

  ngOnDestroy() {
    this.itemsSub.unsubscribe();
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item.product);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
