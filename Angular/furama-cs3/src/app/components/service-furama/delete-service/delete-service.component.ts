import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {FuramaServicesService} from "../../../services/furama-services.service"


@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.scss']
})
export class DeleteServiceComponent implements OnInit {

  private nameService;
  private idServices

  constructor(
    public dialogRef: MatDialogRef<DeleteServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private furamaService : FuramaServicesService
  ) { }

  ngOnInit() {
    console.log(this.data)
    this.nameService = this.data.dataServices.name;
    this.idServices = this.data.dataServices.id;
  }
  closeDialog(){
    this.dialogRef.close();
  } 
  delServices(){
    this.furamaService.delService(this.idServices).subscribe(data=>{
      this.dialogRef.close();
    })
  }

}
