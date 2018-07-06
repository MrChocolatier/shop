import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../../model/category.enum';
import { Product } from '../../model/product.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvaliable: Boolean;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.name = this.product.name;
    this.price = this.product.price;
  }

  onAddToCart() {
    this.cartService.addToCart(this.product);
  }
}
