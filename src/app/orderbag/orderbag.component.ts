import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Service/product.service';
import { Product } from '../Model/product';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-orderbag',
  templateUrl: './orderbag.component.html',
  styleUrls: ['./orderbag.component.scss'],
  providers: [ProductService]
})
export class OrderbagComponent implements OnInit {
  @Output() public count;
  private  productList: Product[];
  private productRes;

constructor(private productService: ProductService , private http: HttpClient, private router: Router) {
  this.productRes = [];
 }

  ngOnInit() {
    this.function();
    this.GetCartList();
  }

  GetCartList(){
  this.productService.getProductData().subscribe((data) => this.productRes = data);
}

  function()
  {
        console.log(this.count);
  }
}
