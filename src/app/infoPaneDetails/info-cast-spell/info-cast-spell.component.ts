import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import ISpell from 'src/app/models/spell.model';
import { CharacterService } from 'src/app/services/character.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';
import ICollapsibleSpellCase from 'src/app/models/collapsibleSpellCase.model';
import { GlobalRefs } from 'src/app/services/GlobalRefs';
import { IfStmt } from '@angular/compiler';
import ICastConfig from 'src/app/models/castConfig.model';

interface yantraPosition { index: number, bonus: number };
@Component({
  selector: 'app-info-cast-spell',
  templateUrl: './info-cast-spell.component.html',
  styleUrls: ['./info-cast-spell.component.css']
})
export class InfoCastSpellComponent implements OnInit, OnDestroy {

  constructor(public char: CharacterService,
    public info: InfoPaneService,
    public ref: GlobalRefs) {
    if (info.castingConfig != undefined) {
      this.castConfig = structuredClone(info.castingConfig);
      this.currentTab = 'Summary';
    }
    else {
      this.castConfig = structuredClone(info.defaultCastingConfig);
    }
    this.bonus = this.castConfig.roteSkillDots
  }

  castConfig: ICastConfig;
  bonus = 0;
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
      name: 'Rote Skill Mudra', active: false, bonus: this.bonus, desc:
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

  isFavorite = false;


  ngOnInit(): void {
    this.castConfig.highestArcanum = this.info.spell.arcanum.toLowerCase();
    this.castConfig.isRote = this.getIsRote(this.info.spell);
    this.castConfig.isPraxis = this.getIsPraxis(this.info.spell);
    this.castConfig.charArcanaDots = this.char.character.arcana[this.castConfig.highestArcanum.toLowerCase() as keyof object];
    this.castConfig.gnosis = this.char.character.stats.gnosis;
    this.castConfig.rulingArcana = this.char.character.arcana.rulingArcanum.includes(this.castConfig.highestArcanum.toLowerCase());

    if (this.castConfig.isRote) {
      this.castConfig.freeReach = 6 - this.info.spell.dots
      let result = this.yantraList.find(obj => {
        return obj.name === 'Rote Skill Mudra'
      });

      if (result) {
        result.bonus = this.castConfig.roteSkillDots;
      }
    }
    else {
      this.castConfig.freeReach = (this.castConfig.charArcanaDots + 1) - this.info.spell.dots
    }

    this.castConfig.dedicatedToolIndex = this.yantraList.findIndex((y) => y.name === 'Dedicated Tool');

    this.castConfig.requiredArcanum = this.info.spell.dots;
    this.castConfig.primaryFactor = this.info.spell.primaryFactor;


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
          this.castConfig.roteSkillDots = dots;
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
    if (this.castConfig.isPraxis && !this.castConfig.isRote) {
      this.castConfig.isPraxis = false;
    }
    this.castConfig.isRote = !this.castConfig.isRote;
  }

  togglePraxis() {
    if (this.castConfig.isRote && !this.castConfig.isPraxis) {
      this.castConfig.isRote = false;
    }
    this.castConfig.isPraxis = !this.castConfig.isPraxis;

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
    if (value <= this.castConfig.charArcanaDots) {
      return dice
    }
    else {
      dice = (value - this.castConfig.charArcanaDots) * 2
      return dice;
    }
  }

  updateActiveYantras(index: number, set: boolean) {
    let isActive = false;
    let activeIndex = 0;

    for (let i = 0; i < this.castConfig.activeYantras.length; i++) {
      if (this.castConfig.activeYantras[i].index == index) {
        isActive = true;
        activeIndex = i;
        break;
      }
    }

    if (isActive) {
      this.castConfig.activeYantras.splice(activeIndex, 1);
    }
    else if (this.yantraList[index].active) {
      this.castConfig.activeYantras.push({ index: index, bonus: this.yantraList[index].bonus });
    }
    this.updatePools();
  }

  yantraEnabled(index: number) {
    let yantra = this.yantraList[index];

    let enabled = true;
    let currentlyActive = yantra.active
    let atMaxYantras = this.castConfig.activeYantras.length >= this.ref.infoMatrix[this.castConfig.gnosis].yantras;
    let mudraAllowed = this.castConfig.isRote;
    let concentrationAllowed = this.castConfig.durationAdvanced || this.castConfig.duration > 0;

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
      result.bonus = this.castConfig.roteSkillDots;
    }


    this.updatePools();
  }


  toggleStandardAdvanced(prop: string) {
  }


  checkForFavoriteConfig() {

    if (this.char.character.favoriteSpells.some(e =>
      e.spell?.name == this.info.spell?.name
      && e.freeReach == this.castConfig.freeReach
      && e.reach == this.castConfig.reach
      && e.dicePool == this.castConfig.dicePool
      && e.mana == this.castConfig.mana
      && e.paradoxDesc == this.castConfig.paradoxDesc
      && e.paradoxDice == this.castConfig.paradoxDice
      && e.summaryCastTime == this.castConfig.summaryCastTime
      && e.summaryDuration == this.castConfig.summaryDuration
      && e.summaryRange == this.castConfig.summaryRange
      && e.summaryScale == this.castConfig.summaryScale)) {
      return true;
    }
    else {
      return false;
    }
  }

  toggleFavorites() {

    if(this.isFavorite){
      var configIndex = this.char.character.favoriteSpells.findIndex(e =>
        e.spell?.name == this.info.spell?.name
        && e.freeReach == this.castConfig.freeReach
        && e.reach == this.castConfig.reach
        && e.dicePool == this.castConfig.dicePool
        && e.mana == this.castConfig.mana
        && e.paradoxDesc == this.castConfig.paradoxDesc
        && e.paradoxDice == this.castConfig.paradoxDice
        && e.summaryCastTime == this.castConfig.summaryCastTime
        && e.summaryDuration == this.castConfig.summaryDuration
        && e.summaryRange == this.castConfig.summaryRange
        && e.summaryScale == this.castConfig.summaryScale)
        this.char.removeFavoriteSpell(configIndex);
    }
    else{
      const clone = structuredClone(this.castConfig);
      clone.spell = structuredClone(this.info.spell);
      this.char.character.favoriteSpells.push(clone);
    }

    this.isFavorite = this.checkForFavoriteConfig();
  }

  updatePools() {


    let localDicePool = this.castConfig.gnosis + this.castConfig.charArcanaDots;
    let localReach = 0;
    let localMana = 0;
    let localParadox = 0;


    // Dice Pool
    this.castConfig.activeYantras.map((y) => {
      localDicePool += y.bonus
    });
    localDicePool -= this.getPotencyMod(this.castConfig.potencyValue);
    localDicePool -= this.castConfig.range;
    localDicePool += this.castConfig.castTime;
    localDicePool -= this.castConfig.scale;
    localDicePool -= this.castConfig.duration;
    localDicePool += this.castConfig.additionalDice;
    if (this.castConfig.spendWillpower) {
      localDicePool += 3;
    }


    // Reach
    localReach += this.castConfig.activeSpells;
    localReach += this.castConfig.extraReach;

    if (this.castConfig.advancedPotency) {
      localReach += 1;
    }
    if (this.castConfig.rangeAdvanced) {
      localReach += 1;
    }
    if (this.castConfig.castingAdvanced) {
      localReach += 1;
    }
    if (this.castConfig.scaleAdvanced) {
      localReach += 1;
    }
    if (this.castConfig.durationAdvanced) {
      localReach += 1;
    }


    // Mana 
    if (this.castConfig.timeInBottle) {
      localReach -= 1;
      localMana += 1
    }
    if (!this.castConfig.rulingArcana) {
      localMana += 1;
    }
    if (this.castConfig.sympatheticRange) {
      localMana += 1;
    }
    if (this.castConfig.temporalRange) {
      localMana += 1;
    }
    localMana += this.castConfig.additionalMana;


    // Paradox

    localParadox = localReach - this.castConfig.freeReach;
    if (localParadox > 0) {
      localParadox *= this.ref.infoMatrix[this.castConfig.gnosis].paradox
    }
    else {
      localParadox = 0;
    }
    let paradoxRollType = '';
    let paradoxIntroduced = false;
    if (this.castConfig.sleeperWitness) {
      localParadox += 1;
    }
    if (this.castConfig.inured) {
      localParadox += 2;
    }

    if (localParadox > 0) {
      paradoxRollType = this.castConfig.numberOfSleepers;
      paradoxIntroduced = true;
    }


    // Paradox Mitigation
    localParadox -= this.castConfig.additionalMana
    if (this.yantraList[this.castConfig.dedicatedToolIndex].active) {
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

    this.castConfig.dicePool = localDicePool;
    this.castConfig.reach = localReach;
    this.castConfig.mana = localMana;
    this.castConfig.paradoxDice = localParadox;
    this.castConfig.paradoxDesc = paradoxRollType;



    // Spell Summary Informaton
    this.castConfig.summaryCastTime = (this.ref.infoMatrix[this.castConfig.gnosis].ritual * (this.castConfig.castTime + 1)) + ' ' + this.ref.infoMatrix[this.castConfig.gnosis].interval;
    if (this.castConfig.castingAdvanced) {
      this.castConfig.summaryCastTime = 'Instant'
    }
    this.setSummaryDuration();
    (this.castConfig.rangeAdvanced) ? this.castConfig.summaryRange = 'Self/touch or Aimed' : this.castConfig.summaryRange = 'Sensory';
    (this.castConfig.rangeAdvanced && this.castConfig.sympatheticRange) ? this.castConfig.summaryRange += ' (Sympathetic)' : '';
    (this.castConfig.rangeAdvanced && this.castConfig.temporalRange) ? this.castConfig.summaryRange += ' (Temporal)' : '';
    this.setSummaryScale();

    this.isFavorite = this.checkForFavoriteConfig();
  }

  setSummaryDuration() {

    if (this.castConfig.durationAdvanced) {
      switch (this.castConfig.duration) {
        case 0:
          this.castConfig.summaryDuration = '1 scene/hour'
          break;
        case 2:
          this.castConfig.summaryDuration = '1 day'
          break;
        case 4:
          this.castConfig.summaryDuration = '1 week'
          break;
        case 6:
          this.castConfig.summaryDuration = '1 month'
          break;
        case 8:
          this.castConfig.summaryDuration = '1 year'
          break;
        case 10:
          this.castConfig.summaryDuration = 'Indefinite'
          break;
        default:
          this.castConfig.summaryDuration = '1 scene/hour'
      }

    }
    else {
      switch (this.castConfig.duration) {
        case 0:
          this.castConfig.summaryDuration = '1 turn'
          break;
        case 2:
          this.castConfig.summaryDuration = '2 turns'
          break;
        case 4:
          this.castConfig.summaryDuration = '3 turns'
          break;
        case 6:
          this.castConfig.summaryDuration = '5 turns'
          break;
        case 8:
          this.castConfig.summaryDuration = '10 turns'
          break;
        case 10:
          this.castConfig.summaryDuration = '20 turns'
          break;
        case 12:
          this.castConfig.summaryDuration = '30 turns'
          break;
        case 14:
          this.castConfig.summaryDuration = '40 turns'
          break;
        case 16:
          this.castConfig.summaryDuration = '50 turns'
          break;
        case 18:
          this.castConfig.summaryDuration = '60 turns'
          break;
        case 20:
          this.castConfig.summaryDuration = '70 turns'
          break;
        default:
          this.castConfig.summaryDuration = '70 turns'
      }
    }
  }

  setSummaryScale() {

    if (this.castConfig.scaleAdvanced) {
      switch (this.castConfig.scale) {
        case 0:
          this.castConfig.summaryScale = '5 Subjects of up to Size 5, or A large house or building'
          break;
        case 2:
          this.castConfig.summaryScale = '10 Subjects of up to Size 10, or A small warehouse or parking lot'
          break;
        case 4:
          this.castConfig.summaryScale = '20 Subjects of up to Size 15, or A large warehouse or supermarket'
          break;
        case 6:
          this.castConfig.summaryScale = '40 Subjects of up to Size 20, or A small factory, or a shopping mall'
          break;
        case 8:
          this.castConfig.summaryScale = '80 Subjects of up to Size 25, or A large factory, or a city block'
          break;
        case 10:
          this.castConfig.summaryScale = '160 Subjects of up to Size 30, or A campus, or a small neighborhood'
          break;
        case 12:
          this.castConfig.summaryScale = '320 Subjects of up to Size 35, or A campus, or a small neighborhood'
          break;
        case 14:
          this.castConfig.summaryScale = '640 Subjects of up to Size 40, or A campus, or a small neighborhood'
          break;
        case 16:
          this.castConfig.summaryScale = '1280 Subjects of up to Size 45, or A campus, or a small neighborhood'
          break;
        default:
          this.castConfig.summaryScale = '5 Subjects of up to Size 5, or A large house or building'
      }

    }
    else {

      switch (this.castConfig.scale) {
        case 0:
          this.castConfig.summaryScale = '1 Subject of up to Size	5, or	Arm’s reach from a central point'
          break;
        case 2:
          this.castConfig.summaryScale = '2 Subjects of up to Size 6, or A small room'
          break;
        case 4:
          this.castConfig.summaryScale = '4 Subjects of up to Size 7, or A large room'
          break;
        case 6:
          this.castConfig.summaryScale = '8 Subjects of up to Size 8, or Several rooms, or a single floor of a house'
          break;
        case 8:
          this.castConfig.summaryScale = '16 Subjects of up to Size 9, or A ballroom or small house'
          break;
        case 10:
          this.castConfig.summaryScale = '32 Subjects of up to Size 10, or A ballroom or small house'
          break;
        case 12:
          this.castConfig.summaryScale = '64 Subjects of up to Size 11, or A ballroom or small house'
          break;
        case 14:
          this.castConfig.summaryScale = '128 Subjects of up to Size 12, or A ballroom or small house'
          break;
        case 16:
          this.castConfig.summaryScale = '256 Subjects of up to Size 13, or A ballroom or small house'
          break;
        default:
          this.castConfig.summaryScale = '1 Subject of up to Size	5, or	Arm’s reach from a central point'
      }
    }
  }

}
