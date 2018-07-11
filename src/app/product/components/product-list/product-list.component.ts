import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Book } from '../../model/book.model';
import { Product } from '../../model/product.model';
import { CartItem } from '../../../cart/model/cart-item.model';

import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  books: Book[];

  private bookSub: Subscription;
  private cartSub: Subscription;

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.bookSub = this.productService.books$.subscribe((books: Book[]) => this.books = books);
    this.cartSub = this.cartService.cartItems$.subscribe((items: CartItem[]) => {
      if (items.length === 0) {
        // Restore quantities if cart is empty
        this.books.forEach(book => {
          book.availableQuantity = book.quantity;
        });
      }

      items.forEach(cartItem => {
        const bookIndex = this.books.findIndex(book => book.name === cartItem.product.name);

        // Update available products quantity
        if (bookIndex !== -1) {
          const book = this.books[bookIndex];
          book.availableQuantity = book.quantity - cartItem.quantity;
        }
      });
    });

    this.productService.getProducts();
  }

  ngOnDestroy() {
    this.bookSub.unsubscribe();
    this.cartSub.unsubscribe();
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
