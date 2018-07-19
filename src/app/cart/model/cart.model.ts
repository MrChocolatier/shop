import { Product } from '../../product/model/product.model';

export class Cart {
    constructor(
        public items: Product[] = [],
        public totalQuantity = 0,
        public totalPrice = 0
    ) {}
}
