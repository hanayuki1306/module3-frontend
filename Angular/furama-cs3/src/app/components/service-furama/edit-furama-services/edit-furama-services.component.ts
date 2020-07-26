import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router'

import {FuramaServicesService} from '../../../services/furama-services.service'

@Component({
  selector: 'app-edit-furama-services',
  templateUrl: './edit-furama-services.component.html',
  styleUrls: ['./edit-furama-services.component.scss']
})
export class EditFuramaServicesComponent implements OnInit {


  formEditServices: FormGroup
  private serviceId

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public furamaService: FuramaServicesService
  ) { }

  ngOnInit() {
    this.formEditServices= this.formBuilder.group({
      name:[''],
      description: [''],
      price: [''],
      links: ['']
    })


    this.activatedRoute.params.subscribe(data=>{
      console.log("this is data from activateRout id")
      console.log(data)
      
      this.serviceId = data.id
      this.furamaService.getServiceByID(this.serviceId).subscribe(data=>{
        this.formEditServices.patchValue(data)
      })
    })


    
  }
  editService() {
    console.log("editServices  func is working")
    this.furamaService.editService(this.formEditServices.value, this.serviceId).subscribe(data=>{
      this.router.navigateByUrl('admin/services/view-all')
    })
  }
}
