import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-psd',
  templateUrl: './psd.component.html',
  styleUrls: ['./psd.component.css']
})
export class PsdComponent implements OnInit {

  constructor( private ds:AdminService) { }

  ngOnInit(): void {
  }
  submit(data){
    console.log(data)
  this.ds.loginproblem(data).subscribe()
  }

}
