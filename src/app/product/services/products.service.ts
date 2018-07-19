import { Observable, of, Subject } from 'rxjs';

import { Product } from '../model/product.model';
import { Book } from '../model/book.model';

const bookData = [
  {author: 'John R.R. Tolkien', title: 'The Lord Of The Rings', date: '01/01/2018', publisher: 'Magic books', quantity: 20, price: 10},
  {author: 'Mr. Cook', title: 'How to cook like a pro', date: '01/01/2012', publisher: 'Cook books', quantity: 3, price: 20},
  {author: 'Miguel de Cervantes', title: 'Don Qixote', date: '01/01/1999', publisher: 'Old books', quantity: 1, price: 35.5},
  {author: 'Christie A.', title: 'The Secret Adversary', date: '01/01/2000', publisher: 'Mistery books', quantity: 0, price: 7.5}
];

export class ProductsService {
  books$: Subject<Book[]> = new Subject();

  constructor() {}

  getProducts() {
    const books = bookData.map(book => {
      return new Book(book.author, book.title, book.date, book.publisher, book.price, book.quantity);
    });

    this.books$.next(books);
  }

  getProductsPromise(): Promise<any> {
    const books = bookData.map(book => {
      return new Book(book.author, book.title, book.date, book.publisher, book.price, book.quantity);
    });

    const promise = new Promise((resolve, reject) => {
      resolve(books);
    });

    return promise;
  }
}
