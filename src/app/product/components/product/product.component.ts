import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Category } from '../../model/category.enum';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // For OnPush to work we need to recreate product each time its properties (e.g. availableQuantity) are updated
  changeDetection: ChangeDetectionStrategy.Default
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
