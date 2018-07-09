import { Product } from './../product/model/product.model';

export class CartItem {
    constructor(
        public product: Product,
        public quantity: number
    ) {}
}
