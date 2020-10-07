import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sanphamkhuyenmai',
  templateUrl: './sanphamkhuyenmai.component.html',
  styleUrls: ['./sanphamkhuyenmai.component.scss']
})
export class SanphamkhuyenmaiComponent implements OnInit {
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
