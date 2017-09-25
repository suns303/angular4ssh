import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';
import {LocalimageComponent} from './localimage/localimage.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
 
const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'customer', component: CustomersComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'findbyimagename', component: SearchCustomersComponent},
  {path:'localimage',component:LocalimageComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}