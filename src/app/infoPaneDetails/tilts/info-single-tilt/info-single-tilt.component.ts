import { Component, Input, OnInit } from '@angular/core';
import ITilt from 'src/app/models/tilt.model';
import { CharacterService } from 'src/app/services/character.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';


@Component({
  selector: 'app-info-single-tilt',
  templateUrl: './info-single-tilt.component.html',
  styleUrls: ['./info-single-tilt.component.css']
})

export class InfoSingleTiltComponent implements OnInit {

  constructor(public char:CharacterService,
    public info: InfoPaneService) { }

  @Input() tilt:ITilt =this.info.tilt;

  
  ngOnInit(): void {
  }
}
