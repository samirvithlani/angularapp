import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import { Employee } from '../employee';
import { MessageService } from 'primeng/api';
import { AppComponent } from '../app.component';
import { SortEvent } from 'primeng/api';
import { EventEmitter } from 'protractor';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  model: Array<any>;
  emp1: Employee;
  cols:any[];
  emp:Employee;


  constructor(private service: DataService, private messageService: MessageService,private app:AppComponent) { }


  
  productList: Array<any>;
  userList: Array<any>;
  status: string;
  
  

  ngOnInit(): void {
  
    this.cols=[
      {field:'eId',header:'eId'},
      {field:'eName',header:'eName'}
      

    ];

    this.service.getProductList().subscribe(res => {
      this.productList = res;
      console.log('response', res)
      console.log("res data", res.data); //2 status  data -->
      console.log(this.productList);

      this.service.getUserList().subscribe(res=>{

        this.userList = res;
        console.log("user list...",this.userList);
        
      })

    });


    var user: any = { pName:'soap',pPrice:5000}
    this.service.addUser(user).subscribe(res=>{


    });


  }



  addEmployee() {

    var emp: any = { eName: 'hem' }
    this.service.addEmployee(emp).subscribe(res => {

      console.log('sucess..')

    });

  }
  

  /* delete(id) {
    console.log('delete called..')
    this.service.deleteEmployee(id).subscribe(res => {

      console.log('deleted');

      this.service.getProductList().subscribe(res => {
        this.productList = res;
        this.messageService.add({severity:'success', summary: 'Success Message', detail:'record deleted'});



      });

    });


  } */

  /* getDataById(id){
    console.log(id);

    this.service.getDataById(id).subscribe(res=>{
      this.employee =res;

    })
  } */

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'record deleted'});
}

deleteEmployee(id){

  this.service.deleteEmployee(id).subscribe(res=>{

    console.log("deletd..")
    this.messageService.add({severity:'Info', summary: 'Success Message', detail:'record deleted'});

    this.service.getProductList().subscribe(res=>{

      this.productList = res; 
    })

  });

}

getDataById(id){

  console.log(id)
  this.service.getDataById(id).subscribe(res=>{


    this.emp = res;

    console.log(res)
    console.log('emp',this.emp);
    
  })

}






clear() {

    this.messageService.clear();
}
}
  