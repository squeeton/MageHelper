import { Injectable } from '@angular/core';
import ICondition from '../models/condition.model';
import IMeritRef from '../models/meritRef.model';
import ISpell from '../models/spell.model';
import ITilt from '../models/tilt.model';

@Injectable({
  providedIn: 'root'
})
export class InfoPaneService {

  constructor() { }

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
  merit: IMeritRef = { name: '', type: '', variableCost: false, minCost: null, maxCost: 0, prerequisite: '', effect: '' };
  tilt: ITilt = { name: '', preDesc: '', effect: ' ', cause: ' ', end: ' ' };
  condition: ICondition = {name: '', effect: '', exampleSkills:'', possibleSources:'', resolution:'', beat: ''};
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
  }

  setInfoPane(id: string) {
    this.destroyPanes();
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
