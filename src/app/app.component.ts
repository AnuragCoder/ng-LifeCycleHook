import { Component } from '@angular/core';
import { MenuForNavService } from './service/menu-for-nav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route : any;
  constructor(nav: MenuForNavService){
    
    this.route  = nav.route;
  
  }

}
