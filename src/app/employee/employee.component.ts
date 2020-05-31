import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

user:Array<any>=[]
  
  myForm: FormGroup;
  constructor(private service:DataService) { }
 
 birthDate = new Date();
  
 
  ngOnInit(): void {
 
    this.user=[
      {id:1,name:'hem',gender:'male',birthDate:"2000-02-02"},
      {id:2,name:'margin',gender:'male',birthDate:"2002-04-12"},
      {id:3,name:'aishwarya',gender:'female',birthDate:"1988-07-07"}
    ];

    this.myForm = new FormGroup({
      eName: new FormControl('',Validators.required),
      eId: new FormControl(''),


    })


  }
  submit() {
    console.log("name-", this.myForm.value.eName)
    console.log("name-", this.myForm.value.eId)
    this.service.addEmployee(this.myForm.value).subscribe(res=>{

      console.log(this.myForm)
      console.log('data added..')
    })
  }

}
