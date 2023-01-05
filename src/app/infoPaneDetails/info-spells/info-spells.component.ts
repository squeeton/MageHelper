import { Component, OnDestroy, OnInit } from '@angular/core';
import ISpell from 'src/app/models/spellDoc.model';
import { GlobalRefs } from 'src/app/services/GlobalRefs';

@Component({
  selector: 'app-info-spells',
  templateUrl: './info-spells.component.html',
  styleUrls: ['./info-spells.component.css']
})
export class InfoSpellsComponent implements OnInit {

  constructor(public refs: GlobalRefs) {
    this.spells = refs.allSpells;
    this.test = this.spells.death[0]
  }

  spells;
  test;

  arcanums = [
    { name: 'death', hidden: true },
    { name: 'fate', hidden: true },
    { name: 'forces', hidden: true },
    { name: 'life', hidden: true },
    { name: 'matter', hidden: true },
    { name: 'mind', hidden: true },
    { name: 'prime', hidden: true },
    { name: 'spirit', hidden: true },
    { name: 'space', hidden: true },
    { name: 'time', hidden: true }
  ];

  ngOnInit(): void {
  }
  
  expandSpell(arcanum: string, i: number) {
  }

  getSpells(arcanum: string) {
    let x = this.spells[arcanum as keyof object]
    return x;
  }

  toggleExpandArcanum(index: number) {
    this.arcanums[index].hidden = !this.arcanums[index].hidden;
  }
}
