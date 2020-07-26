import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router'

import {FuramaServicesService} from "../../../services/furama-services.service"

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss']
})
export class ServiceCreateComponent implements OnInit {

  formAddNewService : FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private furamaService: FuramaServicesService,
    public router: Router
    
    ) { }

  ngOnInit() {
    this.formAddNewService = this.formBuilder.group({
      name: [''],
      description: [''],
      price: [''],
      links: ['']
    })
  }
  addNewService(){
    // console.log(this.formAddNewService.value),
    this.furamaService.addNewService(this.formAddNewService.value).subscribe(data =>{
      this.router.navigateByUrl('/admin/services/view-all')
    })
  }

}
