import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './shared/customer.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './shared/search.pipe';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { PostCustomerComponent } from './post-customer/post-customer.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerComponent,
    SearchPipe,
    AboutComponent,
    OrdersComponent,
    EditCustomerComponent,
    PostCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
