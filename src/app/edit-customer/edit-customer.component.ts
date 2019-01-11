import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../shared/customer.service';
import { Customer } from '../shared/customer';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  private requestObj;
  private customerRes: Customer;
  constructor(private customerService: CustomerService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

  }
  private editCustomerDetails(form: NgForm, content) {
    console.log(form.value);
    this.requestObj = {
      // tslint:disable-next-line:max-line-length
      firstName : form.value.firstName,
      lastName :  form.value.lastName,
      address : form.value.address,
      city : form.value.city,
      state :  form.value.state,
      email :  form.value.email,
      gender : form.value.gender
    };
      this.customerService.addNewCustomerData(this.requestObj).subscribe(
        (res) =>
        console.log('Sent') );
      }
      }
