import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Service/product.service';
import { Product } from '../Model/product';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../Model/cart';
@Component({
  selector: 'app-orderbag',
  templateUrl: './orderbag.component.html',
  styleUrls: ['./orderbag.component.scss'],
  providers: [ProductService]
})
export class OrderbagComponent implements OnInit {
  private  cartList: Cart[];
  private cartRes;

constructor(private productService: ProductService , private http: HttpClient, private router: Router) {
  this.cartRes = [];
 }

  ngOnInit() {
    this.GetCartList();
  }

  GetCartList(){
  this.productService.getAllCartData().subscribe((data) => this.cartRes = data);
}

}
