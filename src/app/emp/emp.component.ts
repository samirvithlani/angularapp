import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { DataService } from '../data.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  myForm: FormGroup;

  constructor(private service: DataService) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      id: new FormControl(''),//pipe validation
      name: new FormControl('', Validators.required),
      salary: new FormControl('', [Validators.minLength(5)]),
      age: new FormControl('', [this.checkMinAge]),
      
    })
  }

checkMinAge(control:FormControl):ValidationErrors{

  var age = control.value;
  if(age<18)
    ageValid:true;

  return null;
}

  submit() {
    this.service.addEmployee(this.myForm.value).subscribe(res => {

      console.log("data submited..")
    })
  }

}
