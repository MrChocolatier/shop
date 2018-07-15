import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Category } from '../../model/category.enum';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  @Output() addToCart = new EventEmitter<Product>();

  constructor() {}

  ngOnInit() {}

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
