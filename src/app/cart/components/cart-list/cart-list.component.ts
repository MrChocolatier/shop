import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { Cart } from '../../model/cart.model';
import { Product } from '../../../product/model/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  itemsInCart: Product[] = [];
  totalPrice: number;
  totalQuantity: number;

  sortBy = 'price';
  sortOptions = ['price', 'quantity', 'name'];
  sortDesc = true;

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

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
