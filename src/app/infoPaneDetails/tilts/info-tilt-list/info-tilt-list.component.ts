import { Component, OnInit } from '@angular/core';
import { GlobalRefs } from 'src/app/services/GlobalRefs';

@Component({
  selector: 'app-info-tilt-list',
  templateUrl: './info-tilt-list.component.html',
  styleUrls: ['./info-tilt-list.component.css']
})
export class InfoTiltListComponent implements OnInit {

  constructor(public refs: GlobalRefs) {
    this.tilts = refs.allTilts
  }

  tilts;

  ngOnInit(): void {
  }

}
