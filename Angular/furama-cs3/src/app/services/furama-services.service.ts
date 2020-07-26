import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FuramaServicesService {

  private API: string = "http://localhost:3000/services-furama";


  constructor(public http: HttpClient ) { }


  getAllFuramaService(): Observable<any>{
    return this.http.get(this.API);
  }
  addNewService(Obj): Observable<any>{
    return this.http.post(this.API,Obj)
  }
  getServiceByID(id): Observable<any>{
    return this.http.get(this.API + "/" + id)
  }
  editService(serviceObj, id){
    return this.http.put(this.API +  "/" + id, serviceObj)
  }
  delService(id): Observable<any> {
    return this.http.delete(this.API + "/" + id);
  }
}
