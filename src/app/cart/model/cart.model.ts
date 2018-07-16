import { CartItem } from './cart-item.model';

export class Cart {
    constructor(
        public items: CartItem[] = [],
        public totalQuantity = 0,
        public totalPrice = 0
    ) {}
}
