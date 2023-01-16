import { Component, Input, OnInit } from '@angular/core';
import ICondition from 'src/app/models/condition.model';
import IMerit from 'src/app/models/merit.model';
import ITilt from 'src/app/models/tilt.model';
import { CharacterService } from 'src/app/services/character.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';

@Component({
  selector: 'app-stats-tab',
  templateUrl: './stats-tab.component.html',
  styleUrls: ['./stats-tab.component.css']
})
export class StatsTabComponent implements OnInit {

  constructor(public info:InfoPaneService,
    public char: CharacterService) { }

  @Input() attributeDot = '';

  ngOnInit(): void {
  }

  previewMerit(merit: IMerit) {
    this.info.destroyPanes();
    setTimeout(() => {
      this.info.setInfoPane('Single Merit');
      this.info.merit = merit.merit;
      this.info.meritDots = merit.dots;
    }, 10);
  }

  previewTilt(tilt: ITilt) {
    this.info.destroyPanes();
    setTimeout(() => {
      this.info.setInfoPane('Single Tilt');
      this.info.tilt = tilt;
    }, 10);
  }

  previewCondition(condition: ICondition) {
    this.info.destroyPanes();
    setTimeout(() => {
      this.info.setInfoPane('Single Condition');
      this.info.condition = condition;
    }, 10);
  }
}
