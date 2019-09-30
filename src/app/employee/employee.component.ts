import { Component, OnInit , OnChanges , SimpleChanges , Input } from '@angular/core';
import { Employee } from '../module/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges {

  @Input employee: Employee;
  @Input message : string;



  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges){

    for(let propName in changes){
      let change  = changes[propName]
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

      console.log(curVal);
      console.log(prevVal);
    }

  }

}
