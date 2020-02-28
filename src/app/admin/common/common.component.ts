import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import * as FileSaver from 'file-saver';



// const EXCEL_TYPE = 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet;charset=UTF-8';
// const EXCEL_EXTENSION = '.xlsx';





import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { from } from 'rxjs';






@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  searchTerm;
  data:[]=[]
  fobject:any[]=[]
  constructor(private ds : AdminService) { }
  e:any={}
  deletedo:any
  departmentsvalue:string
  firstname:string
 ngOnInit(){
   this.departmentsvalue=this.ds.valuechanger
   this.ds.doread(this.departmentsvalue).subscribe((obj)=>{

     this.fobject=obj["message"];
 


   })
  

 }
 //form uploading branchwise
  reg(formdata){
    console.log(formdata);
    this.ds.dopost(formdata).subscribe((formdata)=>{
      this.firstname= formdata["fr"]
 
      if(formdata["message"]=="updated"){
        alert('successfully registered'+ this.firstname)
        
        this.ngOnInit()
      }
    })


  }
  editing(obj){
    this.ds.doupdate(obj).subscribe((res)=>{
      if(res["message"]=="updated"){
        alert("updated successfully")
      }
      this.ngOnInit()
    })
  
  }

  edata(data){
    this.e=data
    console.log("clicked data is",data)



  }
  delete(data){
    
    var a=confirm(`Are You Sure? You want to delete `)
    if(a==true){
      this.ds.dodelete(data).subscribe((res)=>{
    
        if(res["message"]=="success"){
          alert("deleted successfully")
          this.ngOnInit()
        }
      })
    
    }
    else{
      alert(`dint deleted `)
      this.ngOnInit()
    }
    

  }
  search(year){
    console.log(year)

    if(year==="all"){
      this.ngOnInit()
    
    }
    else{
      this.ds.searched(year).subscribe((success)=>{
        this.fobject=success["message"]
        console.log("data is",this.fobject)
    
      
      
      })

    }


  }

  // public downloadFile(): void {
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.fobject);
  //   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames:
  //   ['data'] };
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type:
  //   'array' });
  //   this.saveAsExcelFile(excelBuffer, 'excelFileName');
  //   }
  //   private saveAsExcelFile(buffer: any, fileName: string): void {
  //   const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
  //   FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() +
  //   EXCEL_EXTENSION);
  //   }
    
    downloadPDF(){
      const doc = new jsPDF()
      var col=["firstname","lastname","gender","phonenumber","email","department","postaladdress","yearofjoin","ssc","inter","branchcode","studentid"]
      var rows=[];
      this.fobject.forEach(element=>{
      let firstname=element.firstname;
      let lastname=element.lastname;
      let gender=element.gender;
      let phonenumber=element.phonenumber;
      let email=element.email;
      let department=element.department;
      let postaladdress=element.postaladdress;
      let yearofjoin=element.yearofjoin;
      let ssc=element.ssc;
      let inter=element.inter;
      let branchcode=element.branchcode;
      let studentid=element.studentid;
    
      let temp=[firstname,lastname,gender,phonenumber,email,department,postaladdress,yearofjoin,ssc,inter,branchcode,studentid]
      rows.push(temp)
      })
      doc.autoTable(col,rows,{
        theme:'grid'
        })
        doc.save('first.pdf')
       }
       




  
  }






