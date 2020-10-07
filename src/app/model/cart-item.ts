import { Product } from './Product';

export class CartItem {
    id: number;
    productId: number;
    productName: string;
    price: number;
    desc: string;
    img: string;
    status: boolean;
    qty: number;
    constructor(id: number, product: Product, qty = 1) {
        this.id = id;
        this.productId = product.id;
        this.price = product.price;
        this.productName = product.name;
        this.desc = product.desc;
        this.img = product.img;
        this.qty = qty;

    }
}