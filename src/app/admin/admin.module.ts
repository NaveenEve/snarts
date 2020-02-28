import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { GenerateidComponent } from './generateid/generateid.component';
import { RegistrationComponent } from './registration/registration.component';
import { BranchComponent } from './branch/branch.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { AdminComponent } from './admin/admin.component';
import { CommonComponent } from './common/common.component';
import { SearchPipe } from './search.pipe';









@NgModule({
  declarations: [GenerateidComponent, RegistrationComponent, BranchComponent, AttendanceComponent, MarksComponent, AdminComponent, CommonComponent, SearchPipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
 


  ]
})
export class AdminModule { }
