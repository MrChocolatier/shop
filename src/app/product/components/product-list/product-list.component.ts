import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Book } from '../../model/book.model';
import { Product } from '../../model/product.model';
import { CartItem } from '../../../cart/model/cart-item.model';

import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';
import { Cart } from '../../../cart/model/cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  books: Book[];

  private sub: Subscription;

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.sub = this.productService.books$.subscribe((books: Book[]) => this.books = books);
    this.sub.add(
      this.cartService.cart$.subscribe((cart: Cart) => {
        // Restore quantities if cart is empty
        this.books.forEach((book: Book) => {
          const isInCart = cart.items.length > 0 && cart.items.find(item => item.product.name === book.name);

          if (!isInCart) {
            book.availableQuantity = book.quantity;
          }
        });

        cart.items.forEach(cartItem => {
          const bookIndex = this.books.findIndex(book => book.name === cartItem.product.name);

          // Update available products quantity
          if (bookIndex !== -1) {
            const book = this.books[bookIndex];
            book.availableQuantity = book.quantity - cartItem.quantity;
          }
        });
      })
    );

    this.productService.getProducts();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
