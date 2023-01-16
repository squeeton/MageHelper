import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';

@Component({
  selector: 'app-info-single-spell',
  templateUrl: './info-single-spell.component.html',
  styleUrls: ['./info-single-spell.component.css']
})
export class InfoSingleSpellComponent implements OnInit {

  constructor(public char: CharacterService,
    public info: InfoPaneService) { }

  @Input() spell = this.info.spell;

  @Input() addable = true;
  @Input() addTYpe = 'Rotes';




  ngOnInit(): void {
  }

}
