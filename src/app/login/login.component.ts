import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AdminService } from '../admin.service';

import * as $ from "jquery";








@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  class:any
  loguser: string
  logdata:object={}
  property:any

  constructor(private router:Router,private ds : AdminService) { }

  ngOnInit(){
    this.ds.logout();

  }
  //Login functionality and diverting to admin module
  login(data){
    console.log(data)
    if(data.role==="admin"){
      if(data.username=="admin"){
        if(data.password=="admin"){
          this.router.navigate(['/admin/generateid'])
          alert("logged in successfully")
          this.ds.loginstatus=true
 }
        else {
          alert("wrong Password")
     
        }
  
      }
      else {
    

        
        alert("wrong username");
   
    
      }
    }
    

    else if(data.role===""){
    alert("please choose a role")
    }

    if(data.role==="student"){
      console.log(data)
      this.ds.studentcheck(data).subscribe((obj)=>{
        this.loguser=obj["fr"]
        this.logdata=obj["success"]

        this.ds.loguserobj=this.logdata
        console.log(this.logdata)

       if(obj["message"]=="nouserfound"){
         alert("no user has been found")
       }
       else if(obj["message"]=="success"){
         alert("Welcome "+" "+this.loguser +":)")
         this.ds.studentname=this.loguser

      
    
         this.router.navigate(['/student'])
        
       }
    
      })
        
    }

  }
  blur(){
  this.property=document.getElementById("myVideo");
  this.property.style.filter="blur(20px)";
  
  

  }

  

}

