import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {EmployeeService} from '../../../services/employee.service'


@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent implements OnInit {

  public employeeFName;
  private employeeOfId;

  constructor(
    public dialogRef: MatDialogRef<EmployeeDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService : EmployeeService
    ) {}
    

  ngOnInit() {
    console.log(this.data)

    this.employeeFName = this.data.data1.name;

    this.employeeOfId = this.data.data1.id;

    console.log(this.employeeFName)
  }

  closeDialog(){
    this.dialogRef.close();
  } 

  delEmployee(){
    this.employeeService.deleteEmployee(this.employeeOfId).subscribe(data=>{
      this.dialogRef.close();
    })
  }

}
