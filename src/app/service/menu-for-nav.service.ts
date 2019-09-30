import { Injectable } from '@angular/core';
import {NavItem} from '../module/menu-for-nav'

@Injectable({
  providedIn: 'root'
})
export class MenuForNavService {

  constructor() { }
  // name: String ;
  // disabled : boolean;
  // route ?: string; 
  // children?: NavItem[];
  route: NavItem[] = [
    {
      'name' : 'Life Cycle Hook',
      'disabled' : false,
      'route': '/lsh',
    },
    {
      'name': 'ngOnChange',
      'disabled' : false,
      'route': '/ngOnchangeExample1',
    }

  ];


}
