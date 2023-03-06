import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import IAttainment from 'src/app/models/attainment.model';
import { CharacterService } from 'src/app/services/character.service';
import { GlobalRefs } from 'src/app/services/GlobalRefs';
import { InfoPaneService } from 'src/app/services/info-pane.service';


@Component({
  selector: 'app-info-attainments',
  templateUrl: './info-attainments.component.html',
  styleUrls: ['./info-attainments.component.css']
})
export class InfoAttainmentsComponent implements OnInit {

  constructor(public char: CharacterService,
    public refs: GlobalRefs,
    public info: InfoPaneService) { }

  ngOnInit(): void {
    this.char.addAttainment = true;
  }

  ngOnDestroy(): void {
    this.char.addAttainment = false;
  }

  @Input() attainment: IAttainment = {
    arcanum: '',
    dots: 0,
    name: '',
    desc: '',
    system: ''
  };


  descriptionHidden = true;

  expandItem() {
    this.descriptionHidden = !this.descriptionHidden;
  }

  dotDisplay(dots: number) {
    let display = '';
    for (let i = 0; i < dots; i++) {
      display = display + '•'
    }
    return display;
  }
}
