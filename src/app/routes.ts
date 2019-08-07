import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PostCustomerComponent } from './post-customer/post-customer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
   // {path: '', redirectTo: 'customer', pathMatch: 'full'},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'customer', component: CustomerComponent},
    {path: 'customerdetails/:id', component: CustomerDetailsComponent},
    { path: 'about', component: AboutComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'editcustomer', component: EditCustomerComponent },
    { path: 'postcustomer/:id', component: PostCustomerComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
 ];
