import { Component, OnInit } from '@angular/core';
import { GlobalRefs } from 'src/app/services/GlobalRefs';

@Component({
  selector: 'app-info-attainment-list',
  templateUrl: './info-attainment-list.component.html',
  styleUrls: ['./info-attainment-list.component.css']
})
export class InfoAttainmentListComponent implements OnInit {

  constructor(public refs:GlobalRefs) { 
    this.attainments = refs.allAttainments
  }

  attainments;
  ngOnInit(): void {
  }
}
