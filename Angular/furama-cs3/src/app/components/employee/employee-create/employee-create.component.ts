import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {Router} from '@angular/router'

import {EmployeeService} from '../../../services/employee.service'


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  public formAddNewEmployee: FormGroup;
  public maxDate = new Date();
  public minDate = new Date(1990,0,1); 


  constructor(
    public formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    public router: Router
  ) { }

  ngOnInit() {
    this.formAddNewEmployee = this.formBuilder.group({
      name: ['',[Validators.required]],
      birthday: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      phoneNumber: ['',[Validators.required,Validators.pattern('^(090|091|098|([\(]84[\)][\+]90)|([\(]84[\)][\+]91))[0-9]{7}$')]],
      cmnd: ['',[Validators.required,Validators.pattern('^[0-9]{9}$')]],
      email: ['',[Validators.required,Validators.email]],
      address: ['',[Validators.required]],
      salary: ['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      idPosition: ['',[Validators.required]],
      idDepartment: ['',[Validators.required]],
      idScope: ['',[Validators.required]],
    })
  }

  addNewEmploy(){
    // console.log(this.formAddNewEmployee.value)
    this.employeeService.addNewEmployee(this.formAddNewEmployee.value).subscribe(data=>{
      console.log(this.formAddNewEmployee)
      this.router.navigateByUrl('/admin/employee/view-all')
    })
  } 

}
