import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendancedata:any[]=[]
  
  constructor(public ds : AdminService) { }

  ngOnInit() {
    this.ds.attendanceread().subscribe((data)=>{
      this.attendancedata=data["message"]
    
    

    })

    
  }
  file:File;
  fileUpload(filedata){
    this.file=filedata.target.files[0]; 
  
  }
  uploadexcel(data){
    let formdata =new FormData()
   formdata.append("branch",data.branch);
   formdata.append("year",data.year);
   formdata.append("file",this.file,this.file.name)
   this.ds.upload(formdata).subscribe((res)=>{})
    

  }
}