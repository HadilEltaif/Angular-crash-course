import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductRepresentation} from "../models/product-representation";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL : string = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) {}

  getAllProductsWithLimit(limit : number =5): Observable<Array<ProductRepresentation>> {
      // const productUrl : string = this.baseURL + 'products?limit='+ limit;
      // or
      const productsUrl : string = `${this.baseURL}products?limit=${limit}`;
      return this.http.get<Array<ProductRepresentation>>(productsUrl);

  }

  createProduct(product: ProductRepresentation){
    const ProductUrl : string = `${this.baseURL}products`
    return this.http.post<ProductRepresentation>(ProductUrl,product);
  }



}
