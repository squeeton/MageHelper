import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent implements OnInit {

  constructor(public char: CharacterService) { }

  @Input() maxDots = 5;
  @Input() path = "";
  @Input() size = "base";
  @Input() currentDots = 0;
  @Input() usedDots = 0;
  @Input() consumable = false;
  @Input() consumablePath = '';


  @Output() valueOut = new EventEmitter();

  get maxCols() {
    return ` grid-cols-${this.maxDots} `
  }

  ngOnInit(): void {
  }

  sendValue(value: number) {
    if (this.consumable && !this.char.editMode) {
      if (value == this.usedDots) {

        this.char.updateCharFromPath(this.consumablePath, this.usedDots - 1);
        // this.valueOut.emit({ path: this.consumablePath, val: this.usedDots - 1 });
      }
      else {
        this.char.updateCharFromPath(this.consumablePath, value);
        // this.valueOut.emit({ path: this.consumablePath, val: value });
      }

    }
    else if (this.char.editMode) {
      if (value == this.currentDots) {
        this.char.updateCharFromPath(this.path, this.currentDots - 1);
        // this.valueOut.emit({ path: this.path, val: this.currentDots - 1 });
      }
      else {
        this.char.updateCharFromPath(this.path, value );
        // this.valueOut.emit({ path: this.path, val: value });
      }
    }
  }

  getDots() {
    let finalDots = [];

    let dot = {
      val: 1,
      icon: 'circle',
      class: `text-${this.size}`
    }

    for (let i = 1; i <= this.maxDots; i++) {
      if (this.consumable) {

        if (i <= this.usedDots) {

          finalDots.push({
            val: i,
            icon: 'hide_source',
            class: `text-${this.size}  hover:cursor-pointer }`
          });
        }
        else if (i <= this.currentDots) {

          finalDots.push({
            val: i,
            icon: 'circle',
            class: `text-${this.size}  hover:cursor-pointer`
          });
        }
        else if (i > this.currentDots) {
          finalDots.push({
            val: i,
            icon: 'circle',
            class: `text opacity-20 text-${this.size} ${(this.char.editMode) ? ' hover:cursor-pointer' : ''}`
          });
        }

      }
      else {
        if (i <= this.currentDots) {
          finalDots.push({
            val: i,
            icon: 'circle',
            class: `filled text-${this.size} ${(this.char.editMode) ? ' hover:cursor-pointer' : ''}`
          });
        }
        else {
          finalDots.push({
            val: i,
            icon: 'circle',
            class: `text opacity-20 text-${this.size} ${(this.char.editMode) ? ' hover:cursor-pointer' : ''}`
          });
        }
      }


    }

    return finalDots;
  }

}
