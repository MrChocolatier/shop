import { Component, OnInit } from '@angular/core';

import { Book } from './product/model/book.model';
import { Product } from './product/model/product.model';

import { ProductsService } from './product/services/products.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Shop';
  books: Book[];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getBooks();
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getBooks() {
    this.books = <Book[]>this.productService.getProducts();
  }
}
