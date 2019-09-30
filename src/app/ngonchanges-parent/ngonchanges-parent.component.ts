import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgonchangesChildComponent } from '../ngonchanges-child/ngonchanges-child.component';
import { Employee } from '../module/employee';


@Component({
  selector: 'app-ngonchanges-parent',
  templateUrl: './ngonchanges-parent.component.html',
  styleUrls: ['./ngonchanges-parent.component.css']
})
export class NgonchangesParentComponent implements OnInit {



  
  emp = new Employee('Anurag' , 24);
  msg: string = 'Hello World!';

  constructor(){}

  onFormSubmit(empForm: NgForm){
     let name = empForm.control['name'].value;
     let age = empForm.control['age'].value;
     this.emp = new Employee(name,age);
  }

  ngOnInit() {
  }

}
