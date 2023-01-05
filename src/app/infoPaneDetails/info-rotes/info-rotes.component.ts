import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-info-rotes',
  templateUrl: './info-rotes.component.html',
  styleUrls: ['./info-rotes.component.css']
})
export class InfoRotesComponent implements OnInit, OnDestroy {

  constructor(public char: CharacterService) { }
  roteSkill = '';

  ngOnInit(): void {
    this.char.addSpell = true;
    this.char.addType = 'Rote';
  }

  ngOnDestroy(): void {
    this.char.addSpell = false;
    this.char.addType = '';
    this.char.roteSkillAdd = '';
  }
  
  updateRoteSkill() {
    this.char.roteSkillAdd = this.roteSkill;
  }
}
