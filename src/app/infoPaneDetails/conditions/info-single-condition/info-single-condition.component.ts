import { Component, Input, OnInit } from '@angular/core';
import ICondition from 'src/app/models/condition.model';
import ITilt from 'src/app/models/tilt.model';
import { CharacterService } from 'src/app/services/character.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';

@Component({
  selector: 'app-info-single-condition',
  templateUrl: './info-single-condition.component.html',
  styleUrls: ['./info-single-condition.component.css']
})
export class InfoSingleConditionComponent implements OnInit {

  constructor(public char:CharacterService,
    public info: InfoPaneService) { }

  @Input() condition:ICondition =this.info.condition;

  ngOnInit(): void {
  }

}
