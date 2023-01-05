import { Component, Input, OnInit } from '@angular/core';
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

}
