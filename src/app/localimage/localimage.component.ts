import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {DataService} from '../data.service';
import {Location} from '@angular/common';
import {CreateCustomerComponent} from '../create-customer/create-customer.component';




@Component({
  selector: 'app-localimage',
  templateUrl: './localimage.component.html',
  styleUrls: ['./localimage.component.css']
})
export class LocalimageComponent implements OnInit {

  selectedOption : string;
  customer = new Customer;
  submitted = false;
  constructor(private dataService: DataService, private location: Location) {}

 
    
  changeListner(event){
    var reader = new FileReader();
    // read the image file as a data URL.
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = function(e) {
        var base64src = e.target['result'];
        document.getElementById("image")['src'] = base64src;
        document.getElementById("filepath").setAttribute("value",event.target.value);
    };   
}


private save(): void {
  this.dataService.create(this.customer);
}

  dbsave(event){
      this.customer.image = document.getElementById("image")['src'];
      this.save();
  }


  ngOnInit() {
  }

}
