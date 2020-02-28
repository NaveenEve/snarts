import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ReadmarksComponent } from './readmarks/readmarks.component';
import { ReadattendanceComponent } from './readattendance/readattendance.component';



const routes: Routes = [{path:"student",component:StudentComponent,children:[{path:"readmarks",component:ReadmarksComponent},{path:"readattendance",component:ReadattendanceComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
