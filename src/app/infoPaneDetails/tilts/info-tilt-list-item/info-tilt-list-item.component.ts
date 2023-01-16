import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { GlobalRefs } from 'src/app/services/GlobalRefs';
import { InfoPaneService } from 'src/app/services/info-pane.service';
import ITilt from 'src/app/models/tilt.model';

@Component({
  selector: 'app-info-tilt-list-item',
  templateUrl: './info-tilt-list-item.component.html',
  styleUrls: ['./info-tilt-list-item.component.css']
})
export class InfoTiltListItemComponent implements OnInit, OnDestroy {

  constructor(public char: CharacterService, 
    public refs: GlobalRefs,
    public info: InfoPaneService) { }

  ngOnInit(): void {
    // this.char.addTilt = true;
  }

  ngOnDestroy(): void {
    // this.char.addTilt = false;
  }

  @Input() tilt:ITilt ={name:'', preDesc:'', effect:' ', cause:' ', end:' '};

  
  descriptionHidden = true;

  expandItem() {
    this.descriptionHidden = !this.descriptionHidden;
  }

}
