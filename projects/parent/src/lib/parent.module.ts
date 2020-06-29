import { NgModule } from '@angular/core';
import { ParentComponent } from './parent.component';
import { AddressListComponent } from './parent/address-list/address-list.component';
import { DashboardComponent } from './parent/dashboard/dashboard.component';



@NgModule({
  declarations: [ParentComponent, AddressListComponent, DashboardComponent],
  imports: [
  ],
  exports: [ParentComponent]
})
export class ParentModule { }
