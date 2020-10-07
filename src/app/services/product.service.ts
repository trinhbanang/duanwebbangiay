import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable()
export class ProductService {
  api = 'https://5e7b6f3b0e04630016333391.mockapi.io/product';
  constructor(
    private http: HttpClient
  ) { }
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
    
}
getProduct(id): Observable<Product>{
  console.log(id);
  return this.http.get<Product>(`${this.api}/${id}`);
}
  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
}
addProduct(product): Observable<Product>{
  return this.http.post<Product>(`${this.api}`, product);
}
  updateProduct(product): Observable<Product>{
  return this.http.put<Product>(`${this.api}/${product.id}`, product);
}

}
