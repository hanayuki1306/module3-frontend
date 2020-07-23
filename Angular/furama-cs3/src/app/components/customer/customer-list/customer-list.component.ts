import { Component, OnInit } from '@angular/core';
import {CustomerServicesService} from '../../../services/customer-services.service'


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customers;


  constructor(
    public customerService:CustomerServicesService
  ) { }

  ngOnInit() {
    this.customers=this.customerService.getAllCustomer().subscribe(data=> {
      this.customers = data
      console.log("This is Customer data json" + this.customers)
    })
  }

}
