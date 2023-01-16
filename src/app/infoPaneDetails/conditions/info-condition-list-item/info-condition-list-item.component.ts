import { Component, Input, OnInit } from '@angular/core';
import ICondition from 'src/app/models/condition.model';
import ITilt from 'src/app/models/tilt.model';
import { CharacterService } from 'src/app/services/character.service';
import { GlobalRefs } from 'src/app/services/GlobalRefs';
import { InfoPaneService } from 'src/app/services/info-pane.service';

@Component({
  selector: 'app-info-condition-list-item',
  templateUrl: './info-condition-list-item.component.html',
  styleUrls: ['./info-condition-list-item.component.css']
})
export class InfoConditionListItemComponent implements OnInit {
  
  constructor(public char: CharacterService, 
    public refs: GlobalRefs,
    public info: InfoPaneService) { }

  ngOnInit(): void {
    // this.char.addTilt = true;
  }

  ngOnDestroy(): void {
    // this.char.addTilt = false;
  }

  @Input() condition:ICondition ={name: '', effect: '', exampleSkills:'', possibleSources:'', resolution:'', beat: ''};

  
  descriptionHidden = true;

  expandItem() {
    this.descriptionHidden = !this.descriptionHidden;
  }

}
