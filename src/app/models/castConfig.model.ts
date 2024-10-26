import ISpell from "./spell.model";
import IYantraPosition from "./yantraPosition.model";

export default interface ICastConfig {   
  spell:ISpell, 
  // Dice Info
  freeReach : number,
  reach : number,
  dicePool : number,
  mana : number,
  paradoxDesc : string,
  paradoxDice : number,
  // Caster Info
  showCasterInfo :boolean, 
  gnosis : number,
  highestArcanum  : string,
  charArcanaDots : number,
  activeSpells : number,
  rulingArcana :boolean, 
  // Spell Info
  showSpellInfo :boolean, 
  requiredArcanum : number,
  primaryFactor  : string,
  isRote :boolean, 
  isPraxis :boolean, 
  roteSkillDots : number,
  spendWillpower :boolean, 
  additionalDice : number,
  grimoire :boolean, 
  // Factors
  potencyValue : number,
  advancedPotency :boolean, 
  range : number,
  rangeAdvanced :boolean, 
  sympatheticRange :boolean, 
  temporalRange :boolean, 
  castTime : number,
  castingAdvanced :boolean, 
  timeInBottle :boolean, 
  scale : number,
  scaleAdvanced :boolean, 
  duration : number,
  durationAdvanced :boolean, 
  extraReach : number,
  // Yantras
  activeYantras: Array<IYantraPosition> ;
  yantraBonus : number,
  showActiveYantras :boolean, 
  // Paradox
  inured :boolean, 
  previousParadox : number,
  sleeperWitness :boolean, 
  dedicatedToolIndex : number,
  additionalMana : number,
  numberOfSleepers  : string,
  // Summary
  summaryCastTime : string,
  summaryDuration : string,
  summaryRange : string,
  summaryScale : string
};