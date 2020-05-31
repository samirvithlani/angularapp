import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuArray:Array<any>=[
    {title:'employee',link:'employee'},
    {title:'userlogin',link:'userlogin'},
    {title:'adminlogin',link:'adminlogin'},
    {title:'product',link:'product'},
    {title:'central-gov',link:'central-gov'}
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
