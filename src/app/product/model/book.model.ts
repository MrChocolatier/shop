import { Product } from './product.model';

export class Book implements Product {
    quantity?: number;
    location?: string;

    private publishingDate: Date;

    constructor(
        public author: string,
        public name: string,
        public date: string,
        public publisher: string,
        public price: number
    ) {
        this.publishingDate = new Date(date);
    }
}
