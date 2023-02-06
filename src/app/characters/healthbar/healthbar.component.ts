import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthbar',
  templateUrl: './healthbar.component.html',
  styleUrls: ['./healthbar.component.css']
})
export class HealthbarComponent implements OnInit {

  constructor() { }

  @Input() health: number = 0;
  @Input() bashing: number = 0;
  @Input() lethal: number = 0;
  @Input() aggravated: number = 0;

  ngOnInit(): void {
  }

  get gridCols() {
    return `grid-cols-${this.health}`
  }

  createRange(number: number) {
    // return new Array(number);
    let x = new Array(number);
    return x;
  }


  getHealth() {
    let finalHealth = [];

    // Aggravated
    for (let i = 1; i <= this.aggravated; i++) {

      finalHealth.push({
        val: i,
        icon: 'crop_square',
        class: `filled`
      });
    }
    // Lethal
    for (let i = 1; i <= this.lethal; i++) {

      finalHealth.push({
        val: i,
        icon: 'disabled_by_default',
        class: ``
      });
    }
    // Bashing
    for (let i = 1; i <= this.bashing; i++) {

      finalHealth.push({
        val: i,
        icon: 'indeterminate_check_box',
        class: ``
      });
    }
    // Remaining
    for (let i = 1; i <= (this.health - (this.aggravated + this.lethal + this.bashing)); i++) {

      finalHealth.push({
        val: i,
        icon: 'check_box_outline_blank',
        class: ``
      });
    }


    return finalHealth;
  }
}
