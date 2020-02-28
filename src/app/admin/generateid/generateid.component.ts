import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { element } from 'protractor';

@Component({
  selector: 'app-generateid',
  templateUrl: './generateid.component.html',
  styleUrls: ['./generateid.component.css']
})
export class GenerateidComponent implements OnInit {
gendata:[]=[]


  constructor(private ds:AdminService) { }

  ngOnInit(){
    this.ds.studentids().subscribe((obj)=>{
      this.gendata=obj["message"]
      console.log(this.gendata)
 
    
    })
  }
  generate(generateid){
    generateid.count=0
    console.log(generateid)
    
    
    this.ds.generating(generateid).subscribe((res)=>{
      if(res["message"]=="res"){
        alert("id Generated Successfully")
      }
      else if(res["message"]="alreadyexists"){
        alert("id already generated")
      }

     
 
    })
    
  }

}
