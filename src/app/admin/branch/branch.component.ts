import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor(private router:Router,private ds:AdminService) { }
c:string;
m:string;
e:string;
cs:string;

  ngOnInit(): void {
  }
civil(){
  this.c="civil"
  this.router.navigate(['/admin/common'])

  this.ds.valuechanger=this.c
}
mech(){
  this.m="mech"
  this.router.navigate(['/admin/common'])

  this.ds.valuechanger=this.m
}
ece(){
  this.e="ece"
  this.router.navigate(['/admin/common'])
 
  this.ds.valuechanger=this.e
}
cse(){
  this.cs="cse"
  this.router.navigate(['/admin/common'])

  this.ds.valuechanger=this.cs
}
}
