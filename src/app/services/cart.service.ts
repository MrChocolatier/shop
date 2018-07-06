import { Product } from './../product/model/product.model';
import { CartItem } from '../model/cart-item.model';

export class CartService {
  private cartContents: CartItem[];

  constructor() {
    this.cartContents = [];
  }

  getCartContents(): CartItem[] {
    return this.cartContents;
  }

  // Add to cart 1 item
  addToCart(product: Product) {
    const cartIndex = this.getItemIndex(product);

    if (cartIndex === -1) {
      this.cartContents.push(new CartItem(product, 1));
    } else {
      this.cartContents[cartIndex].quantity += 1;
    }
  }

  // Remove from cart 1 item
  removeFromCart(product: Product) {
    const cartIndex = this.getItemIndex(product);

    if (cartIndex === -1) {
      return;
    }

    if (this.cartContents[cartIndex].quantity > 1) {
      this.cartContents[cartIndex].quantity -= 1;
    } else {
      this.cartContents.splice(cartIndex, 1);
    }
  }

  private getItemIndex(product: Product): number {
    return this.cartContents.findIndex((cartItem) => cartItem.product.name === product.name);
  }
}
