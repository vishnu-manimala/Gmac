import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }

  // items = [
  //   {id: '1000', range:'1000 -1011', status:'Completed', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  //   {id: '1001', range:'1000 -1011', status:'Completed', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  //   // Add more items as needed
  //  ];
  add(){
  this.route.navigate(['Department'])
  }

}
