import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  username:string
  studentdetails:any
  
  

  constructor(public ds:AdminService) { }


  ngOnInit(){
    this.ds.studentattendance(this.studentdetails).subscribe()

    this.username=this.ds.studentname
    this.studentdetails=this.ds.loguserobj
    console.log("data is",this.studentdetails)
    this.ds.studentdata=this.studentdetails
    console.log(this.username)
    console.log(this.studentdetails)
    
  
    
  }

}
