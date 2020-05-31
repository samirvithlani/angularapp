import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-gov',
  templateUrl: './state-gov.component.html',
  styleUrls: ['./state-gov.component.css']
})
export class StateGovComponent implements OnInit {


  @Input() cmName:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
