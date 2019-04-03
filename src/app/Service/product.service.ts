import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../Model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private APIAllUrl;
  private APIUrl;
  private CartAPIUrl;

  constructor(private http: HttpClient, private router: Router) {
    this.APIAllUrl = 'http://localhost:3000/product/';
    this.APIUrl = 'http://localhost:3000/product/';
    this.CartAPIUrl= 'http://localhost:3000/cart/';
   }

   public getProductData() {
    return this.http.get(this.APIAllUrl);
  }

  public getProductDataById(productId) {
    return this.http.get(this.APIUrl + productId);
  }

  public addNewProductData(product) {
    return this.http.post(this.APIUrl, product);
  }

  public editProductDataById(product) {
    return this.http.put(this.APIUrl, product);
  }

  public deleteProductDataById(product) {
    return this.http.delete(this.APIUrl + product);
  }

  public addToCart(product) {
    return this.http.post(this.CartAPIUrl, product);
  }

  public removeFromCart(product) {
    return this.http.delete(this.CartAPIUrl, product);
  }

  public getAllCartData() {
    return this.http.get(this.CartAPIUrl);
  }

  public getAllCartDataByUserId(userId) {
    return this.http.get(this.CartAPIUrl+userId);
  }

}
