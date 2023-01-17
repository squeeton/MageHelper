import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import ISpell from 'src/app/models/spell.model';
import { CharacterService } from 'src/app/services/character.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';
import ICollapsibleSpellCase from 'src/app/models/collapsibleSpellCase.model';

@Component({
  selector: 'app-info-cast-spell',
  templateUrl: './info-cast-spell.component.html',
  styleUrls: ['./info-cast-spell.component.css']
})
export class InfoCastSpellComponent implements OnInit, OnDestroy, OnChanges {

  constructor(public char: CharacterService,
    public info: InfoPaneService) { }


  // Panel Controls
  currentTab = 'Spell Overview';
  collapsible: ICollapsibleSpellCase = {
    spellDesc: false,
    caster: false,
    spell: false,
  }
  tabs = [
    'Spell Overview',
    'Factors',
    'Yantras',
    'Paradox',
    'Summary'
  ]

  // Dice Info
  freeReach = 0;
  reach = 0;
  dicePool = 0;
  mana = 0;
  paradoxDesc = 'desc';
  paradoxDice = 0;

  // Caster Info
  showCasterInfo = true;
  highestArcanum = '';
  charArcanaDots = 0;
  activeSpells = 0;

  // Spell Info
  showSpellInfo = true;
  requiredArcanum = 0;
  primaryFactor = 'Potency';
  isRote = false;
  isPraxis = false;
  roteSkillDots = 0;
  spendWillpower = false;
  additionalDice = 0;



  ngOnInit(): void {
    this.highestArcanum = this.info.spell.arcanum.toLowerCase();
    this.isRote = this.getIsRote(this.info.spell);
    this.isPraxis = this.getIsPraxis(this.info.spell);

    if (this.isRote) {
      this.charArcanaDots = 5;
    }
    else {
      this.charArcanaDots = this.char.character.arcana[this.highestArcanum.toLowerCase() as keyof object];
    }
    this.requiredArcanum = this.info.spell.dots;
    this.primaryFactor = this.info.spell.primaryFactor;



    this.freeReach = (this.charArcanaDots + 1) - this.info.spell.dots
    this.logAll();
  }

  ngOnDestroy(): void {
    this.char.casting = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  getIsRote(spell: ISpell) {
    let rote = false;
    for (let i = 0; i < this.char.character.rotes.length; i++) {
      if (this.char.character.rotes[i].spell.name == spell.name) {
        rote = true;
        break;
      }
    }

    return rote;
  }


  getIsPraxis(spell: ISpell) {

    let praxis = false;
    for (let i = 0; i < this.char.character.praxis.length; i++) {
      if (this.char.character.praxis[i].name == spell.name) {
        praxis = true;
        break;
      }
    }

    return praxis;
  }


  toggleRote() {
    if (this.isPraxis && !this.isRote) {
      this.isPraxis = false;
    }
    this.isRote = !this.isRote;
  }

  togglePraxis() {
    if (this.isRote && !this.isPraxis) {
      this.isRote = false;
    }
    this.isPraxis = !this.isPraxis;

  }

  toggleSection(section: string) {
    this.collapsible[section as keyof ICollapsibleSpellCase] = !this.collapsible[section as keyof ICollapsibleSpellCase]

    console.log(this.collapsible);
  }

  setTab(section: string) {
    this.currentTab = section;
  }

  tabForward() {
    let x = this.tabs.indexOf(this.currentTab);
    if (x + 1 < this.tabs.length) {
      this.currentTab = this.tabs[x + 1];
    }
  }

  tabBackward() {
    let x = this.tabs.indexOf(this.currentTab);
    if (x > 0) {
      this.currentTab = this.tabs[x - 1];
    }
  }

  logAll() {

    console.log({
      highestArcanum: this.highestArcanum,
      charArcanaDots: this.charArcanaDots,
      isRote: this.isRote,
      isPraxis: this.isPraxis,
      activeSpells0: this.activeSpells,
      requiredArcanum: this.requiredArcanum,
      freeReach: this.freeReach,
      reach: this.reach,
      dicePool: this.dicePool,
      mana: this.mana,
      paradoxDesc: this.paradoxDesc,
      paradoxDice: this.paradoxDice,
      additionalDice: this.additionalDice,
      primaryFactor: this.primaryFactor
    })
  }
}
