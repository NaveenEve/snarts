import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt, ReturnStatement } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  studentdata:any={}
  valuechanger:string;
  studentname:any
  bcode:number

  //student data is here in loguserobj
  loguserobj:object={}
  logout(){
    this.loginstatus=false
  }
  loginstatus:boolean=false


  constructor(private hc : HttpClient ) { }
  dopost(obj):Observable<any>{
    obj.branchcode=this.bcode
   
   
    
    
    
    return this.hc.post('/post',obj)
  }
  
  doread(obj):Observable<any>{
   
    return this.hc.get(`/read/${obj}`)
  }

  doupdate(obj):Observable<object> {
    return this.hc.put('/update',obj)

  }

  //http for generate id button
  generating(obj):Observable<any>{

 this.bcode=obj.branchcode

    return this.hc.post('/generateid',obj)
  }
  
  dodelete(obj):Observable<any>{
    return this.hc.delete('/delete',obj)
  }
  obj={'year':0,'department':''}

  //searching dropdown
  searched(year):Observable<any>{
 
    this.obj.year=year;
    this.obj.department=this.valuechanger
    console.log(this.obj)
   
    
    return this.hc.post('/year',this.obj)

  }

  generateidread():Observable<any>
  {
    return this.hc.get<any>('/generatedids')
  }
  upload(file):Observable<any>{
    return this.hc.post('/upload',file)

  }
  studentcheck(obj):Observable<any>{

    return this.hc.post("studentlogin",obj)
  }
  attendanceread():Observable<any>{
    return this.hc.get('/attendanceread')
  }

  studentattendance(studentdata):Observable<any>{
    console.log("student data is ",this.studentdata)

    return this.hc.post('/studentattendance',this.studentdata)
  }

  //marksupload
  uploadmarks(file):Observable<any>{
    return this.hc.post('/uploadmarks',file)
  }


  adminreadingmarks():Observable<any>{
    return this.hc.get('/readingmarks')
  }

studentrmarks(studentdata):Observable<any>{
  return this.hc.post('/studentmarks',this.studentdata)
}

studentids():Observable<any>{
  return this.hc.get('/ids')
}
loginproblem(data){
 return this.hc.put('/updatinglog',data)
}
  
  


  
}
