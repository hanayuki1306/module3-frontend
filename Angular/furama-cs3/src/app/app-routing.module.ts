import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';

import { BrowserModule } from '@angular/platform-browser';
//something need to import to find any phatform ngFor

import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { ServiceCreateComponent } from './components/service-furama/service-create/service-create.component';
import { ServiceListComponent } from './components/service-furama/service-list/service-list.component';
import { ContractCreateComponent } from './components/contract/contract-create/contract-create.component';
import { ContractListComponent } from './components/contract/contract-list/contract-list.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule} from '@angular/forms'
//dung chuc nang search


import {ReactiveFormsModule} from '@angular/forms'



import {NgxPaginationModule} from 'ngx-pagination';


import { MaterialModule } from './material.module';
import { EmployeeDeleteComponent } from './components/employee/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';

// create app-routing.module.ts file
// ghi chu import { Routes, RouterModule } tu '@angular/router'
// config path and component in routes like below
// use [routerLink]="['']" in component tag

const routes: Routes = [
  {path:"", component: HomeComponent},


  //router for employees
  {path:"admin/employee/view-all", component: EmployeeListComponent},
  {path:"employee-create",component: EmployeeCreateComponent},
  {path:"edit-employee/:id",component: EmployeeEditComponent},



  //router for customer
  {path:"admin/customer/view-all",component: CustomerListComponent},
  {path:"customer-create",component: CustomerCreateComponent},

  //router when cant fint path
  {path:"  ",component: ContractCreateComponent},
  {path:"**", component: PageNotFoundComponent}

  // 

];


@NgModule({
  imports: [BrowserModule,
            RouterModule.forRoot(routes),
            Ng2SearchPipeModule,
            FormsModule,
            NgxPaginationModule,
            ReactiveFormsModule,
            MaterialModule
          ],
  exports: [RouterModule],
  declarations: [HomeComponent, PageNotFoundComponent, EmployeeListComponent, EmployeeCreateComponent, CustomerListComponent, CustomerCreateComponent, ServiceCreateComponent, ServiceListComponent, ContractCreateComponent, ContractListComponent, EmployeeDeleteComponent, EmployeeEditComponent]
})
export class AppRoutingModule { }
//  quy dinh hien thi noi dung dong, dinh nghia cac loai router