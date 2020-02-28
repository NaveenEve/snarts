import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-readattendance',
  templateUrl: './readattendance.component.html',
  styleUrls: ['./readattendance.component.css']
})
export class ReadattendanceComponent implements OnInit {

  constructor(private ds:AdminService) { }
  sdata:any=this.ds.studentdata
  studentattendance:any={}

  ngOnInit(){
    this.ds.studentattendance(this.sdata).subscribe((res)=>{
    this.studentattendance=res["message"]
    console.log(this.studentattendance)

      

    })
  }

}
