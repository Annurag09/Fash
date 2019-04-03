import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Customer } from '../shared/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private APIAllUsersUrl;
  private APIUserUrl;

  constructor(private http: HttpClient, private router: Router) {
    this.APIAllUsersUrl = 'http://localhost:3000/user';
    this.APIUserUrl = 'http://localhost:3000/user';
   }
   public getCustomerData() {
    return this.http.get(this.APIAllUsersUrl);
  }

  public getCustomerDataById(customerId) {
    return this.http.get(this.APIUserUrl + customerId);
  }

  public addNewCustomerData(customer) {
    return this.http.post(this.APIUserUrl, customer);
  }

  public editCustomerDataById(customer) {
    return this.http.put(this.APIUserUrl, customer);
  }

  public deleteCustomerDataById(customer) {
    return this.http.delete(this.APIUserUrl + customer);
  }


}
