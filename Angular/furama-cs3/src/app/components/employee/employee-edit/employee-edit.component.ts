import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {Router,ActivatedRoute} from '@angular/router'
import {EmployeeService} from '../../../services/employee.service'


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  public formEditEmployee: FormGroup;
  public maxDate = new Date();
  public minDate = new Date(1990,0,1); 
  public employeeId;


  constructor(
    public formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formEditEmployee = this.formBuilder.group({
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
    this.activatedRoute.params.subscribe(data=>{
      console.log(data);
      this.employeeId = data.id;
      this.employeeService.getEmployeeById(this.employeeId).subscribe(data=>{
        console.log(data)
        this.formEditEmployee.patchValue(data)
      })
    })
  }
  editEmploy() {
    console.log("editEmploy  func is working")
    this.employeeService.editEmployee(this.formEditEmployee.value, this.employeeId).subscribe(data=>{
      this.router.navigateByUrl('admin/employee/view-all')
    })
  }

}
