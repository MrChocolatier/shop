import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Category } from '../../model/category.enum';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  @Output() addToCart = new EventEmitter<Product>();

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvaliable: Boolean;

  constructor() {}

  ngOnInit() {
    this.name = this.product.name;
    this.price = this.product.price;
  }

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
