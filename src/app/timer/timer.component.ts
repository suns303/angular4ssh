import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Customer } from '../customer';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';
import {MatRadioModule} from '@angular/material';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit,OnDestroy {
  customers: Customer[];
  sub : Subscription;
  cust : Customer = new Customer();
  index : number = 0;

  constructor(private dataService: DataService) {}
 
  getCustomers() {
     this.dataService.getCustomers().then(customers => this.customers = customers);
  }
 
  ngOnInit() {
    this.getCustomers();
    let timer = Observable.timer(1000,2000);
    this.sub = timer.subscribe(t => {this.changeimage()});
  }

  ngOnDestroy(){    
    console.log('unsubscribe');
    this.sub.unsubscribe();
  }

  changeimage1(){
    this.sub.unsubscribe();
    console.log(this.sub);
    let timer = Observable.timer(1000,60000);
    this.sub = timer.subscribe(t => {this.changeimage()});
    console.log(this.sub);
  }
  changeimage2(){
    this.sub.unsubscribe();
    console.log(this.sub);
    let timer = Observable.timer(1000,180000);
    this.sub = timer.subscribe(t => {this.changeimage()});
    console.log(this.sub);
  }
  changeimage3(){
    this.sub.unsubscribe();
    console.log(this.sub);
    let timer = Observable.timer(1000,300000);
    this.sub = timer.subscribe(t => {this.changeimage()});
    console.log(this.sub);
  }
  changeimage4(){
    this.sub.unsubscribe();
    console.log(this.sub);
    let timer = Observable.timer(1000,600000);
    this.sub = timer.subscribe(t => {this.changeimage()});
    console.log(this.sub);
  }

  changeimage() {
    this.index += 1;
    if(this.index == 8)
      {
        this.index = 0;
      }
    this.cust = this.customers[this.index];
  }
}
