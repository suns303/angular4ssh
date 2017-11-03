import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {DataService} from '../data.service';
import {Location} from '@angular/common';




@Component({
  selector: 'app-localimage',
  templateUrl: './localimage.component.html',
  styleUrls: ['./localimage.component.css']
})
export class LocalimageComponent implements OnInit {

  selectedOption : string;
  customer = new Customer;
  submitted = false;
  reader = new FileReader;

  constructor(private dataService: DataService, private location: Location) {}

  private save(): void {
    this.dataService.create(this.customer);
  }

  changeListner(event){
    this.reader.readAsDataURL(event.target.files[0]);
    this.reader.onloadend = function(e) {

        let base64src = e.target['result'];
        document.getElementById("image")['src'] = base64src;
        document.getElementById("filepath").setAttribute("value",event.target.value);
    };   
  }

  dbsave(event){
    this.customer.image = document.getElementById("image")['src'];
    this.save();
    alert("save sucess");
  }


  ngOnInit(){}

}
