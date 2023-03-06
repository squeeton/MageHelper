import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import IAttainment from 'src/app/models/attainment.model';
import { CharacterService } from 'src/app/services/character.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';

@Component({
  selector: 'app-info-single-attainment',
  templateUrl: './info-single-attainment.component.html',
  styleUrls: ['./info-single-attainment.component.css']
})
export class InfoSingleAttainmentComponent implements OnInit {

  constructor(public char:CharacterService,
    public info: InfoPaneService) { }

  @Input() attainment:IAttainment =this.info.attainment;

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
  }

  
  dotDisplay(dots: number) {
    let display = '';
    for (let i = 0; i < dots; i++) {
      display = display + '•'
    }
    return display;
  }
  
}
