import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.scss']
})
export class ListemployeeComponent implements OnInit {
  list: any;

  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  
  }
  getEmployee(){
    this.employeeservice.getEmployeeList().subscribe((data:any)=>{
      console.log(data)
      this.list=data;
    })

  }

}
