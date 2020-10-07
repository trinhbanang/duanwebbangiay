import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sanphamnoibat',
  templateUrl: './sanphamnoibat.component.html',
  styleUrls: ['./sanphamnoibat.component.scss']
})
export class SanphamnoibatComponent implements OnInit {
  products: Product[];
  page = 1;
  pageSize = 3;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(response => this.products =
    response, error => console.log(error));
  }

}
