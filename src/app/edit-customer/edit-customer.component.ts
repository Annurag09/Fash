import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../shared/customer.service';
import { Customer } from '../shared/customer';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Popup } from '../shared/popup';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  private requestObj;
  private customerRes: Customer;
  private selectedGender;
  openClass = false;

   public addedstatus: Popup;
  // tslint:disable-next-line:max-line-length
  constructor(private customerService: CustomerService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

  }
  private editCustomerDetails(form: NgForm, content) {
    console.log(form.value);
    this.requestObj = {
      firstName : form.value.firstName,
      lastName : form.value.lastName,
      address : form.value.address,
      city : form.value.city,
      state : form.value.state,
      email : form.value.email,
      gender :form.value.selectedGender
    };
      this.customerService.addNewCustomerData(this.requestObj).subscribe(
        (res) =>
        console.log('Sent') );
      }
      private selectGender(gender) {
        this.selectedGender = gender;
      }
      popUpPost() {
       this.openClass = !this.openClass;
       this.addedstatus = {
         'className' : 'update',
        'header' :  'Message',
        'body' : 'Sucessfully Added Customer',
        'footer' : ''
       };
    }
  }
