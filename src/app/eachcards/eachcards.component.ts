import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eachcards',
  templateUrl: './eachcards.component.html',
  styleUrls: ['./eachcards.component.scss']
})
export class EachcardsComponent implements OnInit {
  @Input() public productdetails;
  @Input() public records;
  @Input()  public view;

  private requestObj;
  private userId;
  private cartRes = {};
isView:boolean;
private productId;

constructor(private productService: ProductService, private http: HttpClient, private route: ActivatedRoute) { 
this.productId = this.route.snapshot.params.id;
}

  ngOnInit() {
    this.isView=this.view;
  }

  itemAdd(){
    this.productService.addToCart(this.productId).subscribe(
      (Resp) => {
        this.cartRes = Resp;
      } );
  }

  itemRemove(){
    this.productService.removeFromCart(this.productId).subscribe(
      (Resp) => {
        this.cartRes = Resp;
      } );
  }

  updatedCart(){
    this.productService.getAllCartDataByUserId(this.userId).subscribe(
      (Resp) => {
        this.cartRes = Resp;
      } );
  }
}

     
