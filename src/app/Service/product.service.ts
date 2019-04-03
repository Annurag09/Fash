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
  private products: Product[];


      // this.products = [
      //     { id: 'p01', name: 'name 1', price: 100, photo: 'thumb1.gif' },
      //     { id: 'p02', name: 'name 2', price: 200, photo: 'thumb2.gif' },
      //     { id: 'p03', name: 'name 3', price: 300, photo: 'thumb3.gif' }
      // ];



  constructor(private http: HttpClient, private router: Router) {
    this.APIAllUrl = 'http://localhost:3000/product/';
    this.APIUrl = 'http://localhost:3000/product/';
    this.CartAPIUrl= 'http://localhost:3000/cart/';
   }


//    findAll(): Product[] {
//     return this.products;
// }

// find(id: string): Product {
//     return this.products[this.getSelectedIndex(id)];
// }

// private getSelectedIndex(id: string) {
//     // for (var i = 0; i < this.products.length; i++) {
//     //     if (this.products[i]._id == id) {
//     //         return i;
//     //     }
//     // }
//     return -1;
// }

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

  public getAllCartData(product) {
    return this.http.get(this.CartAPIUrl, product);
  }

}
