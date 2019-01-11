import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { Customer } from '../shared/customer';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
  providers: [CustomerService]
})
export class CustomerDetailsComponent implements OnInit {
  constructor(private customerService: CustomerService, private http: HttpClient, private route: ActivatedRoute) { 
    this.customerId = this.route.snapshot.params.id;
  }
  private customerId;
  private customerRes = {};

  paramsSubscription: any;
  faUserIcon = faUser;

  ngOnInit() {
    this.getCustomerDetails(this.customerId);
  }
  private getCustomerDetails(customerId) {
    this.customerService.getCustomerDataById(this.customerId).subscribe((Resp) =>
      this.customerRes = Resp
    );

  }
//   GetDetails() {
//     this.customerService.getCustomerDataById().subscribe(data => {
//       this.customerList = data,
//       this.selectedCustomerDetails()
//     });
//     this.customerid = this.route.snapshot.params['id'];
//     this.paramsSubscription = this.route.params
//     .subscribe(
//    (params: Params) => {
//       this.customerid = params['id']}
//    );
// }

}

