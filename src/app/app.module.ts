import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Component} from '@angular/core';


import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomersComponent} from './customers/customers.component';
import {DataService} from './data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

 
import {enableProdMode} from '@angular/core';
import {SearchCustomersComponent} from './search-customers/search-customers.component';
import { LocalimageComponent } from './localimage/localimage.component';
import { TimerComponent } from './timer/timer.component';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { PageComponent } from './page/page.component';
import { ExcelComponent } from './excel/excel.component';
import { saveAs } from 'file-saver';
import { NewpageComponent } from './newpage/newpage.component';






@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    SearchCustomersComponent,
    LocalimageComponent,
    TimerComponent,
    PageComponent,
    ExcelComponent,
    NewpageComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,MdCheckboxModule,
  ],

  providers: [DataService, ],
  bootstrap: [AppComponent]
})
 
export class AppModule {}