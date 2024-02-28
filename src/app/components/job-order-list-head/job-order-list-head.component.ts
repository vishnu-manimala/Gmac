import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-job-order-list-head',
  templateUrl: './job-order-list-head.component.html',
  styleUrls: ['./job-order-list-head.component.css']
})
export class JobOrderListHeadComponent implements OnInit {

  @Input() listTittle:string = "Job Order List";
  constructor() { }

  ngOnInit(): void {
  }
  
}
