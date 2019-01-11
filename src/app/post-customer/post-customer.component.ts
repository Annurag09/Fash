import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.scss']
})
export class PostCustomerComponent implements OnInit {
  private customerId;
  private customerRes = {};
  constructor(private customerService: CustomerService, private http: HttpClient, private route: ActivatedRoute) {
    this.customerId = this.route.snapshot.params.id;
   }

  ngOnInit() {
    this.getCustomerDetails(this.customerId);
  }
  private getCustomerDetails(customerId) {
    this.customerService.getCustomerDataById(this.customerId).subscribe((Resp) =>
      this.customerRes = Resp
    );
  }
}
