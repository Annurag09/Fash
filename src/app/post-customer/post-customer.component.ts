import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { Popup } from '../shared/popup';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.scss']
})
export class PostCustomerComponent implements OnInit {
  private customerId;
  private customerRes = {};
  private requestObj;
  private selectedGender;
  private openClass = false;
  private faUserIcon = faUser;
  public editStatus: Popup;

  constructor(private customerService: CustomerService, private http: HttpClient,  private _router: Router,private route: ActivatedRoute) {
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

  private selectGender(gender) {
    this.selectedGender = gender;
  }
  private editCustomerDetails(form: NgForm, content) {
    console.log(form.value);
    this.requestObj = {
      _id: this.customerId,
      firstName : form.value.firstName,
      lastName :  form.value.lastName,
      address : form.value.address,
      city : form.value.city,
      state :  form.value.state,
      email :  form.value.email,
      gender : this.selectedGender,
    };
      this.customerService.editCustomerDataById(this.requestObj).subscribe(
        (res) =>
        this.editStatus = {
          'className' : 'update',
         'header' :  'Message',
         'body' :  res['firstName'] + ' Details Edited',
         'footer' : ''
        });
        this.openClass = !this.openClass;
   }
  DeleteEntry() {
    const _self = this;
    this.customerService.deleteCustomerDataById(this.customerId).subscribe(
      (res) => this.editStatus = {
        'className' : 'delete',
       'header' :  'Message',
       'body' : res['firstName'] + 'Entry Deleted',
       'footer' : ''
      });
      this.openClass = !this.openClass;
  }
  CancelFunction(){
   this._router.navigate(['../customer']);
  }
  // popUpEdit() {
  //   this.openClass = !this.openClass;
  //   this.editStatus = {
  //     'className' : 'update',
  //    'header' :  'Message',
  //    'body' : 'Details Edited',
  //    'footer' : ''
  //   };
  // }
}

