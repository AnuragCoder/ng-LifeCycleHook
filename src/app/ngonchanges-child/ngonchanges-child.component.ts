import { Component, OnChanges , OnInit , Input , SimpleChanges  } from '@angular/core';
import { Employee } from '../module/employee';


//SimpleChange  =  is a class that represent besic change from previous to new . 
//if there is change in the input value then there are property of SimpleChange to detect it 
// 1. previousValue :  Keeps previous value of input property.
// 2. currentValue :  Keeps current value of input property.
// 3. isFirstChange(): Boolean value that tells whether the new value is the first value assigned


//OnChanges : is a lifecycle hook that is called when any data-bounded property of directive changes .
// onchange is an interface , that has methord declaration as follows -: 
// ngOnCahnge(change : SimpleChange)

// if a component that has to detect the changes has to implement OnChanges interface and override its ngOnChanges() method , 
//  it has an argument as **SimpleChanges** that is used to get new and previous value .



@Component({
  selector: 'app-ngonchanges-child',
  templateUrl: './ngonchanges-child.component.html',
  styleUrls: ['./ngonchanges-child.component.css']
})
export class NgonchangesChildComponent implements OnInit , OnChanges {

  @Input() employee: Employee;
  @Input() message: string;

  allMesChangeLogs: string[] = [];
  allEmpChangeLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges){

    console.log(changes);
   // let change = changes[propName];
  

  }


}
