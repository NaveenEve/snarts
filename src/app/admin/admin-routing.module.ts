import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateidComponent } from './generateid/generateid.component';
import { RegistrationComponent } from './registration/registration.component';
import { BranchComponent } from './branch/branch.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { AdminComponent } from './admin/admin.component';
import { CommonComponent } from './common/common.component';


const routes: Routes = [ {path:'',redirectTo:"/admin/generateid",pathMatch:"full"},
                        {path:"admin",component:AdminComponent,children:[{path:"generateid",component:GenerateidComponent},
                        {path:"registration",  component:RegistrationComponent},
                        {path:"branch",component:BranchComponent},
                       {path:"attendance",component:AttendanceComponent},
                        {path:"marks",component:MarksComponent},
                      {path:"common",component:CommonComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
