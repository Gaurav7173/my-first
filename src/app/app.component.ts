// component [html+css] + code[classes] + decorators

import { Component } from "@angular/core";



@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  pageheading:string='Product details';
  isStatus:boolean=true;

  getheader():string{
    return this.pageheading +' // component to view';
  }
}