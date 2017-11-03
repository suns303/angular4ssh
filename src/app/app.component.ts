import { Component,HostListener } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent{

  name:string;
  show:boolean;

  @HostListener('mouseenter') mouseover() {
    //this.show = false;
  };

  @HostListener('mouseleave') mouseleave() {
   //this.show = true;
  }

  constructor() {
    this.name = 'Angular 2 Ng Class';
    this.show = !true;
  
   }


  


}
 
 

 
 
