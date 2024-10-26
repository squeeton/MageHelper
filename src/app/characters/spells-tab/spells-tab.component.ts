import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ISpell from 'src/app/models/spell.model';
import { InfoPaneService } from 'src/app/services/info-pane.service';
import { CharacterService } from 'src/app/services/character.service';
import IAttainment from 'src/app/models/attainment.model';
import ICastConfig from 'src/app/models/castConfig.model';

@Component({
  selector: 'app-spells-tab',
  templateUrl: './spells-tab.component.html',
  styleUrls: ['./spells-tab.component.css']
})
export class SpellsTabComponent implements OnInit {

  constructor(public info: InfoPaneService,
    public char: CharacterService) { }


  @Input() arcana = {
    death: 0,
    fate: 0,
    forces: 0,
    life: 0,
    matter: 0,
    mind: 0,
    prime: 0,
    spirit: 0,
    space: 0,
    time: 0
  };

  //initialize array
  @Input() spells: ISpell[] = [];
  @Output() valueOut = new EventEmitter();

  ngOnInit(): void {
  }

  sendValue(value: any) {
    this.valueOut.emit(value);
  }

  previewSpell(spell: ISpell) {
    this.info.destroyPanes();
    setTimeout(() => {
      this.info.setInfoPane('Single Spell');
      this.info.spell = spell;
    }, 10);
  }

  previewFavoriteSpell(spell: ISpell, castConfig:ICastConfig) {
    this.info.destroyPanes();
    setTimeout(() => {
      this.info.setInfoPane('Single Spell');
      this.info.spell = spell;
      this.info.castingConfig = castConfig;
    }, 10);
  }

  previewAttainment(attainment: IAttainment) {
    this.info.destroyPanes();
    setTimeout(() => {
      this.info.setInfoPane('Single Attainment');
      this.info.attainment = attainment;
    }, 10);
  }
}
