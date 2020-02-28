import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { ReadmarksComponent } from './readmarks/readmarks.component';
import { ReadattendanceComponent } from './readattendance/readattendance.component';


@NgModule({
  declarations: [StudentComponent, ReadmarksComponent, ReadattendanceComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
