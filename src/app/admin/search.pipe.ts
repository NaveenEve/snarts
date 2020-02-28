import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(fobject: object[], searchTerm: string): any[] {
    if(!searchTerm)
    { 
       return fobject;
       }     else 
       { 
         return fobject.filter(fobj=> fobj["firstname"].toLowerCase().indexOf(searchTerm.toLowerCase())!==-1   )  
        }  
      }


  }
