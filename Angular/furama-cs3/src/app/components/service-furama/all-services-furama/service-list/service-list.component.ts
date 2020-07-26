import { Component, OnInit } from '@angular/core';
import {FuramaServicesService} from '../../../../services/furama-services.service'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DeleteServiceComponent} from "../../delete-service/delete-service.component"

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  private serviesListData

  constructor(
    private furamaService: FuramaServicesService,
    public madDialog: MatDialog
  ) { }

  ngOnInit() {
    this.furamaService.getAllFuramaService().subscribe(data=> {
      this.serviesListData = data
    })
  }

  openDialog(serviceId):void {
    console.log("thisIs service ID")
    console.log(serviceId)

    this.furamaService.getServiceByID(serviceId).subscribe(dataServices =>{
      console.log("this is data Services prepare for delete")
      console.log(dataServices)

      const dialogRef = this.madDialog.open(DeleteServiceComponent, {
        width: '750px',
        data: {dataServices: dataServices},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog delete services was closed');
        this.ngOnInit();
      }); 

    })
  }

}
