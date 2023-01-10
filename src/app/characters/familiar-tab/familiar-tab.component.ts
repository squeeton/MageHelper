import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';

@Component({
  selector: 'app-familiar-tab',
  templateUrl: './familiar-tab.component.html',
  styleUrls: ['./familiar-tab.component.css']
})
export class FamiliarTabComponent implements OnInit {

  constructor(public info:InfoPaneService,
    public char: CharacterService) { }

  ngOnInit(): void {
  }

}
