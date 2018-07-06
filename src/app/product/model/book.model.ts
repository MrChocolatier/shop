import { Product } from './product.model';

export class Book implements Product {
    name: string;
    price: number;
    quantity?: number;
    location?: string;

    author: string;
    publisher: string;

    private publishingDate: Date;

    constructor(
        author: string,
        title: string,
        date: string,
        publisher: string,
        price: number
    ) {
        this.author = author;
        this.name = title;
        this.publishingDate = new Date(date);
        this.publisher = publisher;
        this.price = price;
    }
}
