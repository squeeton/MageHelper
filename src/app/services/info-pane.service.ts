import { Injectable } from '@angular/core';
import IAttainment from '../models/attainment.model';
import ICondition from '../models/condition.model';
import IMeritRef from '../models/meritRef.model';
import ISpell from '../models/spell.model';
import ITilt from '../models/tilt.model';
import ICastConfig from '../models/castConfig.model';

@Injectable({
  providedIn: 'root'
})
export class InfoPaneService {

  constructor() {
  }

  currentTab = "";
  visible = false;
  spell: ISpell = {
    "primaryFactor": "",
    "cost": "",
    "practice": "",
    "reach": [],
    "withstand": "",
    "suggestedRotes": "",
    "dots": 1,
    "name": "",
    "description": "",
    "arcanum": ""
  };
  defaultCastingConfig: ICastConfig = {
    spell: this.spell,
    // Dice Info
    freeReach: 0,
    reach: 0,
    dicePool: 0,
    mana: 0,
    paradoxDesc: 'No Paradox Roll',
    paradoxDice: 0,
    // Caster Info
    showCasterInfo: true,
    gnosis: 0,
    highestArcanum: '',
    charArcanaDots: 0,
    activeSpells: 0,
    rulingArcana: true,
    // Spell Info
    showSpellInfo: true,
    requiredArcanum: 0,
    primaryFactor: 'Potency',
    isRote: false,
    isPraxis: false,
    roteSkillDots: 0,
    spendWillpower: false,
    additionalDice: 0,
    grimoire: false,
    // Factors
    potencyValue: 1,
    advancedPotency: false,
    range: 0,
    rangeAdvanced: false,
    sympatheticRange: false,
    temporalRange: false,
    castTime: 0,
    castingAdvanced: false,
    timeInBottle: false,
    scale: 0,
    scaleAdvanced: false,
    duration: 0,
    durationAdvanced: false,
    extraReach: 0,
    // Yantras
    activeYantras: [],
    yantraBonus: 0,
    showActiveYantras: true,
    // Paradox
    inured: false,
    previousParadox: 0,
    sleeperWitness: false,
    dedicatedToolIndex: 7,
    additionalMana: 0,
    numberOfSleepers: 'Straight Roll',
    // Summary
    summaryCastTime: '',
    summaryDuration: '',
    summaryRange: '',
    summaryScale: ''
  };
  castingConfig?: ICastConfig = undefined;
  attainment: IAttainment = { arcanum: '', dots: 0, name: '', desc: '', system: '' };
  merit: IMeritRef = { name: '', type: '', variableCost: false, minCost: null, maxCost: 0, prerequisite: '', effect: '' };
  tilt: ITilt = { name: '', preDesc: '', effect: ' ', cause: ' ', end: ' ' };
  condition: ICondition = { name: '', effect: '', exampleSkills: '', possibleSources: '', resolution: '', beat: '' };
  meritDots = 0;
  index = 0;



  openPane() {
    this.visible = true;
  }
  closePane() {
    this.destroyPanes();
  }

  destroyPanes() {
    this.currentTab = "";
    this.visible = false;
    this.spell = {
      "primaryFactor": "",
      "cost": "",
      "practice": "",
      "reach": [],
      "withstand": "",
      "suggestedRotes": "",
      "dots": 1,
      "name": "",
      "description": "",
      "arcanum": ""
    };
    this.merit = { name: '', type: '', variableCost: false, minCost: null, maxCost: 0, prerequisite: '', effect: '' };
    this.meritDots = 0;
    this.index = 0;
    this.castingConfig = undefined;
  }

  setInfoPane(id: string, keepPaneAlive?:boolean) {
    if(keepPaneAlive== undefined){
      this.destroyPanes();
    }
    this.currentTab = id;
    if (!this.visible) {
      this.visible = true;
    }
  }


  getMeritCost(merit: IMeritRef) {

    let display = '( ';
    if (this.meritDots > 0) {

      for (let i = 0; i < this.meritDots; i++) {
        display = display + '•'
      }
    }
    else {
      if (merit.minCost != null) {

        for (let i = 0; i < merit.minCost; i++) {
          display = display + '•'
        }
        display = display + ' to ';

        for (let i = 0; i < merit.maxCost; i++) {
          display = display + '•'
        }
      }
      else {
        for (let i = 0; i < merit.maxCost; i++) {
          display = display + '•'
        }
      }

    }
    display = display + ' )';
    return display;
  }

}
