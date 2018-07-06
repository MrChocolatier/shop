import { Component, OnInit } from '@angular/core';
import { ProductsService } from './product/services/products.service';
import { Book } from './product/model/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Shop';
  books: Book[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getBooks();
  }

  private async getBooks() {
    this.books = <Book[]>this.productService.getProducts();
  }
}
