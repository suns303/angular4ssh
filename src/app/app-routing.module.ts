import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';
import {LocalimageComponent} from './localimage/localimage.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimerComponent} from './timer/timer.component';
import {PageComponent}from './page/page.component';
import { ExcelComponent } from './excel/excel.component';
import {NewpageComponent} from './newpage/newpage.component';


 
const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'customer', component: CustomersComponent},
  {path: 'findbyimagename', component: SearchCustomersComponent},
  {path: 'localimage',component:LocalimageComponent},
  {path: 'timer',component:TimerComponent},
  {path:'page',component:PageComponent},
  {path:'excel',component:ExcelComponent},
  {path:'newpage',component:NewpageComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}