import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class CustomerServicesService {

  public API: string = "http://localhost:3000/customers"

  constructor(public http: HttpClient) { }

  getAllCustomer(): Observable<any> {
    return this.http.get(this.API)
  }
}
