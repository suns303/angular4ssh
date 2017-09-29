import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {DataService} from '../data.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {
  imageName: string;
  customers: Customer[];
  
  constructor(private dataService: DataService) {}
  ticks = 0;

  ngOnInit() {
  }

 
  private searchCustomers() {
    this.dataService.getCustomersByImageName(this.imageName).then(customers => this.customers = customers);
  }
 
  onSubmit() {
    this.searchCustomers();
  }
 
}