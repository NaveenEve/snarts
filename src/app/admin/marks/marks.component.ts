import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  constructor(private ds:AdminService) { }
marksdata:any=[]
  ngOnInit(){
    this.ds.adminreadingmarks().subscribe((res)=>{
      this.marksdata=res["message"]
      
    })

  }
  marks:File

  marksupload(file){
    this.marks=file.target.files[0]
  }


  uploadmarks(data){

    let formdata=new FormData()
    formdata.append('branch',data.branch);
    formdata.append("year",data.year);
    formdata.append("marks",this.marks,this.marks.name)
    this.ds.uploadmarks(formdata).subscribe((res)=>{res})


  }

}
