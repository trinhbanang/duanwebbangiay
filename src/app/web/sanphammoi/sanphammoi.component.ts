import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sanphammoi',
  templateUrl: './sanphammoi.component.html',
  styleUrls: ['./sanphammoi.component.scss']
})
export class SanphammoiComponent implements OnInit {
  products: Product[];
  @Input() product: Product
  
  page = 1;
  pageSize = 9;
  constructor(
    private productService: ProductService,
    private msg: MessengerService,
    private cartService: CartService
  ) { }
  
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(response => this.products =
      response, error => console.log(error));
  }
  handleAddToCart() {
    this.cartService.addProductToCart(this.product).subscribe(() => {
      this.msg.sendMsg(this.product)
    })
  }

}
