import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'

})
export class DataService {


  

  constructor(private http:HttpClient) { }

  shareData:string;

  getUserList():Observable<any>{

    return this.http.get('http://localhost:8080/viewuser');

  }

  addUser(model):Observable<any>{

    
    return this.http.post('http://localhost:8080/product/addProduct',model);
    
  }
  getProductList():Observable<any>{

    return this.http.get('https://springp1boot.herokuapp.com/viewEmployee');
  }
  addEmployee(model:any):Observable<any>{
    
    var data ={eId:model.id,eName:model.name}
    return this.http.post('https://springp1boot.herokuapp.com/addEmployee',data);
        
  }
  
  deleteEmployee(id:number):Observable<any>{

    return this.http.delete('https://springp1boot.herokuapp.com/deletEmployee/'+id);
  }

  getDataById(id:number):Observable<any>{

    return this.http.get('https://springp1boot.herokuapp.com/viewEmployee/'+id)
  }

  login(){

    return true;
  }
  adminLogin(){

    return true;
  }


  
}
