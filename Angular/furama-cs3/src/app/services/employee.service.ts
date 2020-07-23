import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public API: string = "http://localhost:3000/employees"

  constructor(public http: HttpClient) { }


  getAllEmployees(): Observable<any>{
    return this.http.get(this.API)
  }

  addNewEmployee(employObject): Observable<any> {
    return this.http.post(this.API, employObject);
  }
  getEmployeeById(idEmployee): Observable<any> {
    return this.http.get(this.API + "/" + idEmployee)
  }

  deleteEmployee(employeeId): Observable<any> {
    return this.http.delete(this.API + "/" + employeeId);
  }


  editEmployee(employee, employeeId){
    return this.http.put(this.API +  "/" + employeeId, employee)
  }
} 
