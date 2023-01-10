import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import IMeritRef from 'src/app/models/meritRef.model';
import { CharacterService } from 'src/app/services/character.service';
import { GlobalRefs } from 'src/app/services/GlobalRefs';
import { InfoPaneService } from 'src/app/services/info-pane.service';

@Component({
  selector: 'app-info-merits',
  templateUrl: './info-merits.component.html',
  styleUrls: ['./info-merits.component.css']
})
export class InfoMeritsComponent implements OnInit,OnDestroy {

  constructor(public char: CharacterService, 
    public refs: GlobalRefs,
    public info: InfoPaneService) { }

  ngOnInit(): void {
    this.char.addMerit = true;
  }

  ngOnDestroy(): void {
    this.char.addMerit = false;
  }

  @Input() merit:IMeritRef ={ name: '', type: '', variableCost: false, minCost: null, maxCost: 0, prerequisite: '', effect: '' };

  
  descriptionHidden = true;

  expandItem() {
    this.descriptionHidden = !this.descriptionHidden;
  }

}
