import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';
import {LocalimageComponent} from './localimage/localimage.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimerComponent} from './timer/timer.component';
import {PageComponent}from './page/page.component';
 
const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'customer', component: CustomersComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'findbyimagename', component: SearchCustomersComponent},
  {path: 'localimage',component:LocalimageComponent},
  {path: 'timer',component:TimerComponent},
  {path:'page',component:PageComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}