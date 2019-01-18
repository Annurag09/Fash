import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { Customer } from '../shared/customer';
import { HttpClient } from '@angular/common/http';
import {  faList, faPlus, faGripVertical, faEdit, faUser} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [CustomerService]

})
export class CustomerComponent implements OnInit {

  private  customerList: Customer[];
  private faEditIcon = faEdit;
  private faListIcon = faList;
  private faAddIcon = faPlus;
  private faGridIcon = faGripVertical;
  private faUserIcon = faUser;
  private i: any;
  private gridSelected = true;
  private listSelected = false;
  private pageCount = 1;
  private pageSize = 4;
  private start = 0;
  private end = 8;
  private customerRes;

  constructor(private customerService: CustomerService , private http: HttpClient, private router: Router) {
    this.customerRes = [];
  }

  ngOnInit() {
     this.GetList();
  }
  GetList() {
  this.customerService.getCustomerData().subscribe((data) => this.customerRes = data);
}

grid_class() {
  if (this.gridSelected === false) {
      this.gridSelected = true;
      this.listSelected = false;
  } else {
    this.listSelected = false;
  }
}

list_class() {
  if (this.gridSelected === false) {
    this.listSelected = true;
} else {
  this.gridSelected = false;
  this.listSelected = true;
  }
}
public ngDoCheck() {
  this.start = this.pageSize * (this.pageCount - 1);
  this.end = this.pageSize * this.pageCount;
  this.customerList = this.customerRes.slice(this.start, this.end);
}
private goToCustomerPage() {
  this.router.navigate(['customer']);
}

private new_customer() {
  this.router.navigate(['/editcustomer']);
}

}
