import { Component, Input, OnInit } from '@angular/core';
import { jobOrderList } from 'src/app/models/jobOrderList';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

@Input() tableData!: jobOrderList[];
  constructor() { }

  ngOnInit(): void {
  }

}
