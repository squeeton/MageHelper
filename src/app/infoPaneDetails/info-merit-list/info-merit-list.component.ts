import { Component, OnInit } from '@angular/core';
import IMeritRef from 'src/app/models/meritRef.model';
import { GlobalRefs } from 'src/app/services/GlobalRefs';

@Component({
  selector: 'app-info-merit-list',
  templateUrl: './info-merit-list.component.html',
  styleUrls: ['./info-merit-list.component.css']
})
export class InfoMeritListComponent implements OnInit {

  constructor(public refs:GlobalRefs) { 
    this.merits = refs.allMerits
  }

  merits;
  ngOnInit(): void {
  }

}
