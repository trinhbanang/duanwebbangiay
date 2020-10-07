import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-chitietsp',
  templateUrl: './chitietsp.component.html',
  styleUrls: ['./chitietsp.component.scss']
})
export class ChitietspComponent implements OnInit {
  product: Product;
  constructor(
    private productService : ProductService,
    private route : ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data => {
        this.product = data;
      })
    });
  }

}
