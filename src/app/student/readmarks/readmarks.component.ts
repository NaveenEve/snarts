import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-readmarks',
  templateUrl: './readmarks.component.html',
  styleUrls: ['./readmarks.component.css']
})
export class ReadmarksComponent implements OnInit {

  constructor(private ds:AdminService) { }
 
  student=this.ds.studentdata
  studemntmarks:any={}

  ngOnInit() {
    this.ds.studentrmarks(this.student).subscribe((res)=>{
      this.studemntmarks=res["message"]

    })
    

    }
    
    
    
  }


