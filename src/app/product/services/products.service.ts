import { Injectable } from '@angular/core';
import { resolve } from 'q';

import { Product } from './../model/product.model';
import { Book } from '../model/book.model';

const bookData = [
  {author: 'John R.R. Tolkien', title: 'The Lord Of The Rings', date: '01/01/2018', publisher: 'Magic books', price: 10},
  {author: 'Mr. Cook', title: 'How to cook like a pro', date: '01/01/2012', publisher: 'Cook books', price: 20},
  {author: 'Miguel de Cervantes', title: 'Don Qixote', date: '01/01/1999', publisher: 'Old books', price: 35.5},
  {author: 'Christie A.', title: 'The Secret Adversary', date: '01/01/2000', publisher: 'Mistery books', price: 7.5}
];

export class ProductsService {
  constructor() {}

  getProducts(): Product[] {
    return bookData.map(book => {
      return new Book(book.author, book.title, book.date, book.publisher, book.price);
    });
  }
}
