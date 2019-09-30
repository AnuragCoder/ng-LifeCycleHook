import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnInit {

  lifecycle : any = [
    {id: 1 , name : 'constructor' },
    {id: 2 , name : 'ngOnChanges' },
    {id: 3 , name : 'ngOnInit'},
    {id: 4 , name : 'ngDoCheck'},
    {id: 5 , name : 'ngAfterContentInit'},
    {id: 6 , name : 'ngAfterContentChecked'},
    {id: 7 , name : 'ngAfterViewInit'},
    {id: 8 , name : 'ngAfterViewChecked'},
    {id: 9 , name : 'ngOnDestroy'}
  ]

  constructor() {
    console.log('Lsh');
   }

  ngOnInit() {
  }

}
