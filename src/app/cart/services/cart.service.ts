import { Subject } from 'rxjs';

import { Product } from '../../product/model/product.model';
import { CartItem } from '../model/cart-item.model';
import { Cart } from '../model/cart.model';

export class CartService {
  cart$ = new Subject();

  private cartItems: CartItem[] = [];
  private totalQuantity = 0;
  private totalPrice = 0;

  constructor() {}

  // Add to cart 1 item
  addToCart(product: Product, quantity = 1) {
    const cartIndex = this.getItemIndex(product);

    if (cartIndex === -1) {
      this.cartItems.push(new CartItem(product, quantity));
    } else {
      this.cartItems[cartIndex].quantity += quantity;
    }

    this.calculateTotals();
    this.cart$.next(new Cart(this.cartItems, this.totalQuantity, this.totalPrice));
  }

  // Remove from cart 1 item
  removeFromCart(product: Product, quantity?: number) {
    const cartIndex = this.getItemIndex(product);

    if (cartIndex === -1) {
      return;
    }

    if (!quantity || quantity >= this.cartItems[cartIndex].quantity) {
      // Remove items entirely
      this.cartItems.splice(cartIndex, 1);
    } else {
      this.cartItems[cartIndex].quantity -= quantity;
    }

    this.calculateTotals();
    this.cart$.next(new Cart(this.cartItems, this.totalQuantity, this.totalPrice));
  }

  clearCart() {
    this.cartItems = [];

    this.calculateTotals();
    this.cart$.next(new Cart(this.cartItems, this.totalQuantity, this.totalPrice));
  }

  private getItemIndex(product: Product): number {
    return this.cartItems.findIndex((cartItem) => cartItem.product.name === product.name);
  }

  private calculateTotals() {
    this.totalQuantity = this.cartItems.reduce((value, item) => {
      return value + item.quantity;
    }, 0);

    this.totalPrice = this.cartItems.reduce((value, item) => {
      return value + (item.quantity * item.product.price);
    }, 0);
  }
}
