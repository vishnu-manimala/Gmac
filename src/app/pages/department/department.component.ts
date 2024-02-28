import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/models/jobOrderList';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {


  constructor() { }
  dataList =[
    {
      number:"1000- 1011",
      status:"Completed",
      description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
      the industrys standard dummy text ever since 
      the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type 
      specimen book`,
      department:"Design"
    },
    {
      number:"1000- 1011",
      status:"Completed",
      description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
      the industrys standard dummy text ever since 
      the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type 
      specimen book`,
      department:"Design"
    },
    {
      number:"1000- 1011",
      status:"Completed",
      description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
      the industrys standard dummy text ever since 
      the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type 
      specimen book`,
      department:"Design"
    },
    {
      number:"1000- 1011",
      status:"Completed",
      description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
      the industrys standard dummy text ever since 
      the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type 
      specimen book`,
      department:"Design"
    },
    {
      number:"1000- 1011",
      status:"Ongoing",
      description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
      the industrys standard dummy text ever since 
      the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type 
      specimen book`,
      department:"Design"
    },
    {
      number:"1000- 1011",
      status:"Completed",
      description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
      the industrys standard dummy text ever since 
      the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type 
      specimen book`,
      department:"Design"
    }
  ];
  ngOnInit(): void {
  }

}
