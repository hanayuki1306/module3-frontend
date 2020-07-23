import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/database/employee/IEmployee';
import { list_employee } from 'src/app/database/employee/DAO/list-employee';

import { EmployeeService } from "../../../services/employee.service"
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {EmployeeDeleteComponent} from '../employee-delete/employee-delete.component'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees;
  Employs = list_employee;
  employDetail:IEmployee;

  
  constructor(
    public employeeService: EmployeeService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(data =>{
        this.employees = data
        console.log(data)
      }
    )
  }


  openDialog(employeedId): void {

    console.log(employeedId)
    
    this.employeeService.getEmployeeById(employeedId).subscribe(dataEmployee =>{
      console.log (dataEmployee);
      
      const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
        width: '750px',
        data: {data1: dataEmployee},
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog delete employee was closed');
        this.ngOnInit();
      }); 
    })
  }
}

// import entryComponents: [EmployeeDeleteComponent]  o material.module.ts
