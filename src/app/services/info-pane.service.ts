import { Injectable } from '@angular/core';
import ISpell from '../models/spell.model';

@Injectable({
  providedIn: 'root'
})
export class InfoPaneService {

  constructor() { }

  currentTab = "Rotes";
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
  index = 0;


  openPane() {
    this.visible = true;
  }
  closePane() {
    this.visible = false;
    this.currentTab = "";
  }

  destroyPanes() {
    this.currentTab = "";
  }

  setInfoPane(id: string) {
    this.currentTab = id;
    if (!this.visible) {
      this.visible = true;
    }
  }

}
