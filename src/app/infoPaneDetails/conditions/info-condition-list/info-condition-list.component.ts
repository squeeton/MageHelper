import { Component, OnInit } from '@angular/core';
import { GlobalRefs } from 'src/app/services/GlobalRefs';

@Component({
  selector: 'app-info-condition-list',
  templateUrl: './info-condition-list.component.html',
  styleUrls: ['./info-condition-list.component.css']
})
export class InfoConditionListComponent implements OnInit {

  constructor(public refs: GlobalRefs) {
    this.conditions = refs.allConditions
  }

  conditions;

  ngOnInit(): void {
  }

}
