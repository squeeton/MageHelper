import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-spell-list',
  templateUrl: './info-spell-list.component.html',
  styleUrls: ['./info-spell-list.component.css']
})
export class InfoSpellListComponent implements OnInit {

  constructor() { }
  descriptionHidden = true;
  @Input() spell = {
    "id": "FgOYU3EKAcivLUGaRMZr",
    "primaryFactor": "Duration",
    "cost": "",
    "practice": "Compelling",
    "reach": [
      {
        "effect": "The mage is able to cause even greater darkness, applying the Blinded Tilt to anyone within the spell’s area of effect for the Duration of the spell.",
        "cost": 1
      }
    ],
    "withstand": "",
    "suggestedRotes": "Occult, Intimidation, Expression",
    "hidden": true, "dots": 1,
    "name": "Deepen Shadows",
    "description": "The mage can influence the shadows in the spell’s area of effect, deepening darkness and making the area nearly completely pitch black. The area is affected by the Poor Light Environmental Tilt for the Duration of the spell.",
    "arcanum": "Death"
  }

  ngOnInit(): void {
  }

  expandSpell() {
    this.descriptionHidden = !this.descriptionHidden;
  }
}
