import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  username: string = "";
  password: string = "";

  flag: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private service: DataService) {

  }
  name:string;

  ngOnInit(): void {

    

  }



  submit() {

    console.log("submit method..")
    this.flag = this.service.login();

    if (this.flag == true) {
      console.log("session activated...")
      localStorage.setItem("isActive", "true");
    }
    else {
      console.log("try again...")
      this.router.navigate(['/userlogin'])
    }
  }

}