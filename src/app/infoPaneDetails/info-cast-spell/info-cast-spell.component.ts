import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import ISpell from 'src/app/models/spell.model';
import { CharacterService } from 'src/app/services/character.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';
import ICollapsibleSpellCase from 'src/app/models/collapsibleSpellCase.model';
import { GlobalRefs } from 'src/app/services/GlobalRefs';
import { IfStmt } from '@angular/compiler';

interface yantraPosition { index: number, bonus: number };
@Component({
  selector: 'app-info-cast-spell',
  templateUrl: './info-cast-spell.component.html',
  styleUrls: ['./info-cast-spell.component.css']
})
export class InfoCastSpellComponent implements OnInit, OnDestroy {

  constructor(public char: CharacterService,
    public info: InfoPaneService,
    public ref: GlobalRefs) { }


  // Panel Controls
  currentTab = 'Spell Overview';
  collapsible: ICollapsibleSpellCase = {
    spellDesc: false,
    caster: true,
    spell: true,
    potency: false,
    range: false,
    castTime: false,
    scale: false,
    duration: false,
    yantra: false,
    pathTools: false,
    pathMaterials: false,
    paradox: false,
    spellSummary: false,
    spellFactors: false,
    releasedParadox: true,
    containedParadox: true,
    successes: true
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
  paradoxDesc = 'No Paradox Roll';
  paradoxDice = 0;

  // Caster Info
  showCasterInfo = true;
  gnosis = 0;
  highestArcanum = '';
  charArcanaDots = 0;
  activeSpells = 0;
  rulingArcana = true;

  // Spell Info
  showSpellInfo = true;
  requiredArcanum = 0;
  primaryFactor = 'Potency';
  isRote = false;
  isPraxis = false;
  roteSkillDots = 0;
  spendWillpower = false;
  additionalDice = 0;
  grimoire = false;

  // Factors
  potencyValue = 1;
  advancedPotency = false;
  range = 0;
  rangeAdvanced = false;
  sympatheticRange = false;
  temporalRange = false;
  castTime = 0;
  castingAdvanced = false;
  timeInBottle = false;
  scale = 0;
  scaleAdvanced = false;
  duration = 0
  durationAdvanced = false;
  extraReach = 0;


  // Yantras
  yantraList = [
    { name: 'Demesne', active: false, bonus: 2, desc: 'A prepared ritual space with a soul stone' },
    {
      name: 'Location', active: false, bonus: 1, desc:
        'A place and time symbolically linked to the spell.'
    },
    {
      name: 'Supernal Verge', active: false, bonus: 2, desc:
        'A place where the Supernal touches the Fallen World.'
      // Actions
    },
    {
      name: 'Rote Skill Mudra', active: false, bonus: this.roteSkillDots, desc:
        'Uses skill dots as a bonus. The character must be free to make whatever mnemonic gestures are used to recall the Rote.'
    },
    {
      name: 'Concentration', active: false, bonus: 2, desc:
        'Duration must be greater than a turn. If the mage is hurt or takes a non-reflexive action while the spell is active, it ends immediately.'
    },
    { name: 'Mantra (High Speech)', active: false, bonus: 2, desc: 'Must be spoken aloud. Cannot be used reflexively.' },
    { name: 'Runes', active: false, bonus: 2, desc: 'The subject is marked with runes. Ritual casting only. If anything damages or disrupts the runes while the spell is active, it ends immediately.' },
    // Tools
    {
      name: 'Dedicated Tool', active: false, bonus: 0, desc:
        'An item that synchronizes with her Nimbus and that feeds in to her understanding of magic. Reduces Paradox by 2 dice.'
    },
    {
      name: 'Path Tool', active: false, bonus: 1, desc:
        'Tools which align closely to her Path. See p.121 for examples.'
    },
    {
      name: 'Order Tool', active: false, bonus: 1, desc:
        'Tools which draw upon an Order’s symbols rather than those of the Supernal world directly, focusing magic in a way that matches their teachings.'
    },
    {
      name: 'Material Sympathy', active: false, bonus: 2, desc:
        'An item sympathetically linked to the subject as they are now. At least one sympathetic tool is required for sympathetic casting. Does not grant a bonus when used with Sympathetic Range or Temporal Sympathy Attainments.'
    },
    {
      name: 'Representational Sympathy', active: false, bonus: 1, desc:
        'An item sympathetically linked to the subject as they were previously. At least one sympathetic tool is required for sympathetic casting. Does not grant a bonus when used with Sympathetic Range or Temporal Sympathy Attainments.'
    },
    {
      name: 'Symbolic Sympathy', active: false, bonus: 0, desc:
        'An indirect representation of the subject. At least one sympathetic tool is required for sympathetic casting.'
    },
    {
      name: 'Sacrament', active: false, bonus: 1, desc:
        'An object symbolic of the spell that the mage destroys during casting.'
    },
    {
      name: 'Rare Sacrament', active: false, bonus: 2, desc:
        'A sacrament which requires significant effort to acquire.'
    },
    {
      name: 'Otherworldly Sacrament', active: false, bonus: 3, desc:
        'A sacrament from somewhere other than the material realm.'
    },
    {
      name: 'Persona', active: false, bonus: 1, desc:
        'A persona Yantra keys in to the mage’s Shadow Name and Cabal Theme Merits.'
    },
    {
      name: 'Persona', active: false, bonus: 2, desc:
        'A persona Yantra keys in to the mage’s Shadow Name and Cabal Theme Merits.'
    },
    {
      name: 'Persona', active: false, bonus: 3, desc:
        'A persona Yantra keys in to the mage’s Shadow Name and Cabal Theme Merits.'
    },
    {
      name: 'Persona', active: false, bonus: 4, desc:
        'A persona Yantra keys in to the mage’s Shadow Name and Cabal Theme Merits.'
    }
  ]
  activeYantras: Array<yantraPosition> = [];
  yantraBonus = 0;
  showActiveYantras = true;


  // Paradox
  inured = false;
  previousParadox = 0;
  sleeperWitness = false;
  dedicatedToolIndex = 7;
  additionalMana = 0;
  numberOfSleepers = 'Straight Roll';


  // Summary
  summaryCastTime = '';
  summaryDuration = '';
  summaryRange = '';
  summaryScale = '';

  ngOnInit(): void {
    this.highestArcanum = this.info.spell.arcanum.toLowerCase();
    this.isRote = this.getIsRote(this.info.spell);
    this.isPraxis = this.getIsPraxis(this.info.spell);
    this.charArcanaDots = this.char.character.arcana[this.highestArcanum.toLowerCase() as keyof object];
    this.gnosis = this.char.character.stats.gnosis;
    this.rulingArcana = this.char.character.arcana.rulingArcanum.includes(this.highestArcanum.toLowerCase());

    if (this.isRote) {
      this.freeReach = 6 - this.info.spell.dots
      let result = this.yantraList.find(obj => {
        return obj.name === 'Rote Skill Mudra'
      });

      if (result) {
        result.bonus = this.roteSkillDots;
      }
    }
    else {
      this.freeReach = (this.charArcanaDots + 1) - this.info.spell.dots
    }

    this.dedicatedToolIndex = this.yantraList.findIndex((y) => y.name === 'Dedicated Tool');

    this.requiredArcanum = this.info.spell.dots;
    this.primaryFactor = this.info.spell.primaryFactor;


    this.updatePools();
  }

  ngOnDestroy(): void {
    this.char.casting = false;
  }

  getIsRote(spell: ISpell) {
    let rote = false;
    for (let i = 0; i < this.char.character.rotes.length; i++) {
      if (this.char.character.rotes[i].spell.name == spell.name) {
        rote = true;
        let roteSkill = this.char.character.rotes[i].roteSkill
        let dots = this.char.character.skills[(roteSkill.toLowerCase() as keyof object)];
        if (dots != undefined) {
          this.roteSkillDots = dots;
        }
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
    this.collapsible[section as keyof ICollapsibleSpellCase] = !this.collapsible[section as keyof ICollapsibleSpellCase];
    this.updatePools();
  }

  setTab(section: string) {
    this.currentTab = section;
    (this.collapsible.paradox) ? this.collapsible.paradox = false : '';
  }

  tabForward() {
    let x = this.tabs.indexOf(this.currentTab);
    (this.collapsible.paradox) ? this.collapsible.paradox = false : '';
    if (x + 1 < this.tabs.length) {
      this.currentTab = this.tabs[x + 1];
    }
    document.getElementById('castingNav')?.scrollIntoView();
  }

  tabBackward() {
    let x = this.tabs.indexOf(this.currentTab);
    if (x > 0) {
      this.currentTab = this.tabs[x - 1];
    }
    document.getElementById('castingNav')?.scrollIntoView();
  }

  getPotencyMod(value: number) {
    let dice = 0;
    if (value <= this.charArcanaDots) {
      return dice
    }
    else {
      dice = (value - this.charArcanaDots) * 2
      return dice;
    }
  }

  updateActiveYantras(index: number, set: boolean) {
    let isActive = false;
    let activeIndex = 0;

    for (let i = 0; i < this.activeYantras.length; i++) {
      if (this.activeYantras[i].index == index) {
        isActive = true;
        activeIndex = i;
        break;
      }
    }

    if (isActive) {
      this.activeYantras.splice(activeIndex, 1);
    }
    else if (this.yantraList[index].active) {
      this.activeYantras.push({ index: index, bonus: this.yantraList[index].bonus });
    }
    this.updatePools();
  }

  yantraEnabled(index: number) {
    let yantra = this.yantraList[index];

    let enabled = true;
    let currentlyActive = yantra.active
    let atMaxYantras = this.activeYantras.length >= this.ref.infoMatrix[this.gnosis].yantras;
    let mudraAllowed = this.isRote;
    let concentrationAllowed = this.durationAdvanced || this.duration > 0;

    if (currentlyActive) {
      return true;
    }
    else if (atMaxYantras) {
      return false;
    }
    else if (yantra.name == 'Rote Skill Mudra' && !mudraAllowed) {
      return false;
    }
    else if (yantra.name == 'Concentration' && !concentrationAllowed) {
      return false;
    }

    return enabled
  }

  updateRoteSkill() {
    var result = this.yantraList.find(obj => {
      return obj.name === 'Rote Skill Mudra'
    })
    if (result) {
      result.bonus = this.roteSkillDots;
    }


    this.updatePools();
  }


  toggleStandardAdvanced(prop: string) {
  }


  updatePools() {
    let localDicePool = this.gnosis + this.charArcanaDots;
    let localReach = 0;
    let localMana = 0;
    let localParadox = 0;


    // Dice Pool
    this.activeYantras.map((y) => {
      localDicePool += y.bonus
    });
    localDicePool -= this.getPotencyMod(this.potencyValue);
    localDicePool -= this.range;
    localDicePool += this.castTime;
    localDicePool -= this.scale;
    localDicePool -= this.duration;
    localDicePool += this.additionalDice;
    if (this.spendWillpower) {
      localDicePool += 3;
    }


    // Reach
    localReach += this.activeSpells;
    localReach += this.extraReach;

    if (this.advancedPotency) {
      localReach += 1;
    }
    if (this.rangeAdvanced) {
      localReach += 1;
    }
    if (this.castingAdvanced) {
      localReach += 1;
    }
    if (this.scaleAdvanced) {
      localReach += 1;
    }
    if (this.durationAdvanced) {
      localReach += 1;
    }


    // Mana 
    if (this.timeInBottle) {
      localReach -= 1;
      localMana += 1
    }
    if (!this.rulingArcana) {
      localMana += 1;
    }
    if (this.sympatheticRange) {
      localMana += 1;
    }
    if (this.temporalRange) {
      localMana += 1;
    }
    localMana += this.additionalMana;


    // Paradox

    localParadox = localReach - this.freeReach;
    if (localParadox > 0) {
      localParadox *= this.ref.infoMatrix[this.gnosis].paradox
    }
    else {
      localParadox = 0;
    }
    let paradoxRollType = '';
    let paradoxIntroduced = false;
    if (this.sleeperWitness) {
      localParadox += 1;
    }
    if (this.inured) {
      localParadox += 2;
    }

    if (localParadox > 0) {
      paradoxRollType = this.numberOfSleepers;
      paradoxIntroduced = true;
    }


    // Paradox Mitigation
    localParadox -= this.additionalMana
    if (this.yantraList[this.dedicatedToolIndex].active) {
      localParadox -= 2;
    }


    if (localParadox <= 0 && paradoxIntroduced) {
      paradoxRollType = 'Chance Die';
      localParadox = 1;
    }
    else if (localParadox <= 0) {
      paradoxRollType = 'No Roll';
      localParadox = 0;
    }

    this.dicePool = localDicePool;
    this.reach = localReach;
    this.mana = localMana;
    this.paradoxDice = localParadox;
    this.paradoxDesc = paradoxRollType;



    // Spell Summary Informaton
    this.summaryCastTime = (this.ref.infoMatrix[this.gnosis].ritual * (this.castTime + 1)) + ' ' + this.ref.infoMatrix[this.gnosis].interval;
    this.setSummaryDuration();
    (this.rangeAdvanced) ? this.summaryRange = 'Self/touch or Aimed' : this.summaryRange = 'Sensory';
    (this.rangeAdvanced && this.sympatheticRange) ? this.summaryRange += ' (Sympathetic)' : '';
    (this.rangeAdvanced && this.temporalRange) ? this.summaryRange += ' (Temporal)' : '';
    this.setSummaryScale();

  }

  setSummaryDuration() {

    if (this.durationAdvanced) {
      switch (this.duration) {
        case 0:
          this.summaryDuration = '1 scene/hour'
          break;
        case 2:
          this.summaryDuration = '1 day'
          break;
        case 4:
          this.summaryDuration = '1 week'
          break;
        case 6:
          this.summaryDuration = '1 month'
          break;
        case 8:
          this.summaryDuration = '1 year'
          break;
        case 10:
          this.summaryDuration = 'Indefinite'
          break;
        default:
          this.summaryDuration = '1 scene/hour'
      }

    }
    else {
      switch (this.duration) {
        case 0:
          this.summaryDuration = '1 turn'
          break;
        case 2:
          this.summaryDuration = '2 turns'
          break;
        case 4:
          this.summaryDuration = '3 turns'
          break;
        case 6:
          this.summaryDuration = '5 turns'
          break;
        case 8:
          this.summaryDuration = '10 turns'
          break;
        case 10:
          this.summaryDuration = '20 turns'
          break;
        case 12:
          this.summaryDuration = '30 turns'
          break;
        case 14:
          this.summaryDuration = '40 turns'
          break;
        case 16:
          this.summaryDuration = '50 turns'
          break;
        case 18:
          this.summaryDuration = '60 turns'
          break;
        case 20:
          this.summaryDuration = '70 turns'
          break;
        default:
          this.summaryDuration = '70 turns'
      }
    }
  }

  setSummaryScale() {

    if (this.scaleAdvanced) {
      switch (this.scale) {
        case 0:
          this.summaryScale = '5 Subjects of up to Size 5, or A large house or building'
          break;
        case 2:
          this.summaryScale = '10 Subjects of up to Size 10, or A small warehouse or parking lot'
          break;
        case 4:
          this.summaryScale = '20 Subjects of up to Size 15, or A large warehouse or supermarket'
          break;
        case 6:
          this.summaryScale = '40 Subjects of up to Size 20, or A small factory, or a shopping mall'
          break;
        case 8:
          this.summaryScale = '80 Subjects of up to Size 25, or A large factory, or a city block'
          break;
        case 10:
          this.summaryScale = '160 Subjects of up to Size 30, or A campus, or a small neighborhood'
          break;
        case 12:
          this.summaryScale = '320 Subjects of up to Size 35, or A campus, or a small neighborhood'
          break;
        case 14:
          this.summaryScale = '640 Subjects of up to Size 40, or A campus, or a small neighborhood'
          break;
        case 16:
          this.summaryScale = '1280 Subjects of up to Size 45, or A campus, or a small neighborhood'
          break;
        default:
          this.summaryScale = '5 Subjects of up to Size 5, or A large house or building'
      }

    }
    else {

      switch (this.scale) {
        case 0:
          this.summaryScale = '1 Subject of up to Size	5, or	Arm’s reach from a central point'
          break;
        case 2:
          this.summaryScale = '2 Subjects of up to Size 6, or A small room'
          break;
        case 4:
          this.summaryScale = '4 Subjects of up to Size 7, or A large room'
          break;
        case 6:
          this.summaryScale = '8 Subjects of up to Size 8, or Several rooms, or a single floor of a house'
          break;
        case 8:
          this.summaryScale = '16 Subjects of up to Size 9, or A ballroom or small house'
          break;
        case 10:
          this.summaryScale = '32 Subjects of up to Size 10, or A ballroom or small house'
          break;
        case 12:
          this.summaryScale = '64 Subjects of up to Size 11, or A ballroom or small house'
          break;
        case 14:
          this.summaryScale = '128 Subjects of up to Size 12, or A ballroom or small house'
          break;
        case 16:
          this.summaryScale = '256 Subjects of up to Size 13, or A ballroom or small house'
          break;
        default:
          this.summaryScale = '1 Subject of up to Size	5, or	Arm’s reach from a central point'
      }
    }
  }

}
