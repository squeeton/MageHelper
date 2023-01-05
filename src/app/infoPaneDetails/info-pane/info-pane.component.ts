import { Component, Input, OnInit } from '@angular/core';
import { InfoPaneService } from 'src/app/services/info-pane.service';

@Component({
  selector: 'app-info-pane',
  templateUrl: './info-pane.component.html',
  styleUrls: ['./info-pane.component.css']
})
export class InfoPaneComponent implements OnInit {

  constructor( public info: InfoPaneService) { }

  title = 'Rotes';

  ngOnInit(): void {
  }

  closePane(){
    this.info.closePane();
  }
}
