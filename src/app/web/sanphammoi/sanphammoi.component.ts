import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sanphammoi',
  templateUrl: './sanphammoi.component.html',
  styleUrls: ['./sanphammoi.component.scss']
})
export class SanphammoiComponent implements OnInit {
  products: Product[];
  page = 1;
  pageSize = 9;
  constructor(
    private productService: ProductService
  ) { }
  
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(response => this.products =
      response, error => console.log(error));
  }

}
