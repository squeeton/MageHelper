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
    if(this.info.castingConfig!= undefined){
      setTimeout(() => {
        this.info.setInfoPane('Cast Spell', true);
        this.info.spell = this.spell;
        this.char.casting = true;
      }, 10);
    }
  }

  castSpell() {
    this.info.destroyPanes();
    setTimeout(() => {
      this.info.setInfoPane('Cast Spell');
      this.info.spell = this.spell;
      this.char.casting = true;
    }, 10);
  }


}
