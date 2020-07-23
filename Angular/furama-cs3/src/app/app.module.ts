import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//import HttpClientModule de su dung angularservice  o file app.module xong sang file service import tiep 
// import {HttpClient} from '@angular/common/http'
// trong constructor truyen vao  1 bien http co kieu du lieu HttpClient public
// public http: HttpClient 
// tao 1 bien ten API co kieu du lieu string la ten cua duong dan(API) vi du http://localhost:3000/employees
//import {Observable} from 'rxjs' 


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
