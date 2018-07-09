import { Product } from './product.model';

export class Book implements Product {
    private publishingDate: Date;

    constructor(
        public author: string,
        public name: string,
        public date: string,
        public publisher: string,
        public price: number,
        public quantity?: number,
        public location?: string
    ) {
        this.publishingDate = new Date(date);
    }
}
