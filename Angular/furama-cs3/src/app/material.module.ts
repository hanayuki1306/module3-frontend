
import { NgModule } from '@angular/core';
import { MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDeleteComponent } from './components/employee/employee-delete/employee-delete.component';
import { DeleteServiceComponent} from "./components/service-furama/delete-service/delete-service.component"
@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule, 
    BrowserAnimationsModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ MatDatepickerModule ],
  entryComponents: [
    EmployeeDeleteComponent,
    DeleteServiceComponent
  ]
})

export class MaterialModule {}