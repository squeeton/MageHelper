import { Injectable } from '@angular/core';
import { ICharacter, IDetails } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/data.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';
import ISpell from '../models/spell.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private db: DataService,
    public info: InfoPaneService,
    public auth: AuthService) { }

  loading = true;
  saving = false;
  characterID = '';
  character: ICharacter = {
    "praxis": [],
    "uid": "",
    "spells": [],
    "details": {
      "characterName": "Chungus McDungus",
      "path": "Ninja",
      "legacy": "of Kain",
      "vice": "Too Cool",
      "virtue": "Way Too Cool",
      "order": "of the Hoes",
      "shadowName": "Big Pimpin"
    },
    "stats": {
      "size": 5,
      "armor": 2,
      "arcaneExperiences": 0,
      "health": 7,
      "wisdom": 7,
      "willpower": 7,
      "initiativeMod": 4,
      "experience": 0,
      "usedWillpower": 0,
      "defense": 5,
      "speed": 8,
      "gnosis": 2,
      "aggravatedDamage": 0,
      "lethalDamage": 0,
      "remainingMana": 3,
      "maxMana":0,
      "bashingDamage": 0
    },
    "skills": {
      "weaponry": 0,
      "computer": 0,
      "occult": 0,
      "animalKen": 0,
      "intimidation": 0,
      "empathy": 0,
      "drive": 0,
      "subterfuge": 0,
      "survival": 0,
      "streetwise": 0,
      "stealth": 0,
      "larceny": 0,
      "investigation": 0,
      "medicine": 0,
      "academics": 0,
      "science": 0,
      "firearms": 0,
      "socialize": 0,
      "expression": 0,
      "brawl": 0,
      "crafts": 0,
      "athletics": 0,
      "persuasion": 0,
      "politics": 0
    },
    "merits": {},
    "arcana": {
      "fate": 0,
      "time": 1,
      "mind": 0,
      "matter": 0,
      "spirit": 2,
      "life": 0,
      "prime": 0,
      "space": 0,
      "forces": 0,
      "death": 3
    },
    "attributes": {
      "wits": 1,
      "manipulation": 1,
      "strength": 1,
      "dexterity": 1,
      "intelligence": 1,
      "stamina": 1,
      "presence": 1,
      "composure": 1,
      "resolve": 1
    },
    "rotes": []
  }
  editMode = false;
  addProblem = false;


  addSpell = false;
  addType = '';
  roteSkillAdd = '';

  get displayName() {
    let displayName = '';
    if (this.character.details.characterName.length > 0 && this.character.details.shadowName.length > 0) {
      displayName = this.character.details.characterName + ' - ' + this.character.details.shadowName;
    }
    else if (this.character.details.characterName.length > 0 && this.character.details.shadowName.length == 0) {
      displayName = this.character.details.characterName
    }
    else if (this.character.details.characterName.length == 0 && this.character.details.shadowName.length > 0) {
      displayName = this.character.details.shadowName
    }
    return displayName;
  }

  setCharacter(char: ICharacter) {
    this.character = char;
  }

  async setInitialCharacter(uid: string) {

    let characterData = await this.db.getCharacter(uid);
    console.log(characterData);
    if( characterData.char.details.characterName !=''){
      this.character = characterData.char;
    }
    this.characterID = characterData.id;
    this.loading = false;
  }

  updateCharFromPath(path: string, val: any) {
    let keys = path.split('.');
    let data: any = this.character;

    while (keys.length > 1) {
      data = data[keys.shift() as keyof Object];
    }

    if (data) {
      let attr = keys.shift();
      if (attr) {
        data[attr as keyof object] = val;
      }
    }
  }

  addDamage(damageType: string) {
    let maxhealth = this.character.stats.health;
    let bashingDamage = this.character.stats.bashingDamage;
    let lethalDamage = this.character.stats.lethalDamage;
    let aggravatedDamage = this.character.stats.aggravatedDamage;

    if (damageType == 'bashing') {
      if ((aggravatedDamage + lethalDamage + bashingDamage) < maxhealth) {
        this.character.stats.bashingDamage += 1;
      }
      else if ((aggravatedDamage + lethalDamage) < maxhealth) {
        this.character.stats.bashingDamage -= 1;
        this.character.stats.lethalDamage += 1;
      }
      else if ((aggravatedDamage) < maxhealth) {
        this.character.stats.lethalDamage -= 1;
        this.character.stats.aggravatedDamage += 1;
      }
    }
    else if (damageType == 'lethal') {
      if ((aggravatedDamage + lethalDamage + bashingDamage) < maxhealth) {
        this.character.stats.lethalDamage += 1;
      }
      else if ((aggravatedDamage + lethalDamage) < maxhealth && bashingDamage > 1) {
        this.character.stats.bashingDamage -= 2;
        this.character.stats.lethalDamage += 2;
      }
      else if ((aggravatedDamage + lethalDamage) < maxhealth && bashingDamage == 1) {
        this.character.stats.bashingDamage -= 1;
        this.character.stats.aggravatedDamage += 1;
      }
      else if (aggravatedDamage < maxhealth && lethalDamage > 1) {
        this.character.stats.lethalDamage -= 2;
        this.character.stats.aggravatedDamage += 2;
      }
      else if (aggravatedDamage < maxhealth && lethalDamage == 1) {
        this.character.stats.lethalDamage = 0;
        this.character.stats.aggravatedDamage += 1;
      }
    }
    else if (damageType == 'aggravated') {
      if ((aggravatedDamage + lethalDamage + bashingDamage) < maxhealth) {
        this.character.stats.aggravatedDamage += 1;
      }
      else if ((aggravatedDamage + lethalDamage) < maxhealth && bashingDamage >= 2) {
        this.character.stats.bashingDamage -= 2;
        this.character.stats.lethalDamage += 1;
        this.character.stats.aggravatedDamage += 1;
      }
      else if ((aggravatedDamage + lethalDamage) < maxhealth && bashingDamage == 1) {
        this.character.stats.bashingDamage -= 1;
        this.character.stats.lethalDamage -= 1;
        this.character.stats.aggravatedDamage += 2;
      }
      else if ((aggravatedDamage + lethalDamage) == maxhealth && lethalDamage >= 3) {
        this.character.stats.lethalDamage -= 3;
        this.character.stats.aggravatedDamage += 3;
      }
      else if ((aggravatedDamage + lethalDamage) == maxhealth && lethalDamage < 3) {
        this.character.stats.lethalDamage = 0;
        this.character.stats.aggravatedDamage = maxhealth;
      }

      if (this.character.stats.bashingDamage < 0) { this.character.stats.bashingDamage = 0; }
      if (this.character.stats.lethalDamage < 0) { this.character.stats.lethalDamage = 0; }
      if (this.character.stats.aggravatedDamage < 0) { this.character.stats.aggravatedDamage = 0; }

    }
  }

  healDamage(damageType: string) {

    if (this.character.stats.bashingDamage > 0 && damageType == 'bashing') { this.character.stats.bashingDamage -= 1; }
    if (this.character.stats.lethalDamage > 0 && damageType == 'lethal') { this.character.stats.lethalDamage -= 1; }
    if (this.character.stats.aggravatedDamage > 0 && damageType == 'aggravated') { this.character.stats.aggravatedDamage -= 1; }
  }

  async saveCharacter() {
    this.saving = true;
    try {
      await this.db.updateCharacter(this.characterID, this.character);
      setTimeout(() => {
        this.saving = false;
      }, 500);
    } catch (e) {
      this.addProblem = true;
      setTimeout(() => {
        this.addProblem = false;
      }, 1500);
      this.saving = false;
    }
  }

  updateDetails(deets: IDetails) {
    this.character.details.characterName = deets?.characterName || ''
    this.character.details.path = deets?.path || ''
    this.character.details.legacy = deets?.legacy || ''
    this.character.details.vice = deets?.vice || ''
    this.character.details.virtue = deets?.virtue || ''
    this.character.details.order = deets?.order || ''
    this.character.details.shadowName = deets?.shadowName || ''
  }


  addSingleSpell(spell: ISpell) {
    let addable;
    if (this.addType == 'Rote') {
      if (this.roteSkillAdd == '') {
        this.addProblem = true;
        setTimeout(() => this.addProblem = false, 1500);
        return;
      }
      addable = {
        roteSkill: this.roteSkillAdd,
        spell: spell
      }
      this.character.rotes.push(addable);
    }
    else if (this.addType == 'Praxis') {
      this.character.praxis.push(spell);
    }

  }


  removeRote(index: number) {
    if (this.character.rotes[index]) {
      this.character.rotes.splice(index, 1);
    }
  }
  removePraxis(index: number) {
    if (this.character.praxis[index]) {
      this.character.praxis.splice(index, 1);
    }
  }


}
