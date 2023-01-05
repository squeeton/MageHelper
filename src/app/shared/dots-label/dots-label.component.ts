import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dots-label',
  templateUrl: './dots-label.component.html',
  styleUrls: ['./dots-label.component.css']
})
export class DotsLabelComponent implements OnInit {

  constructor() { }

  @Input() currentDots = 0;
  
  ngOnInit(): void {
  }

  rollSkill($event: Event){

  }
}
