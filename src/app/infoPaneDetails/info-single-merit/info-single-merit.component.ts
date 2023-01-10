import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import IMeritRef from 'src/app/models/meritRef.model';
import { CharacterService } from 'src/app/services/character.service';
import { InfoPaneService } from 'src/app/services/info-pane.service';

@Component({
  selector: 'app-info-single-merit',
  templateUrl: './info-single-merit.component.html',
  styleUrls: ['./info-single-merit.component.css']
})
export class InfoSingleMeritComponent implements OnInit, OnDestroy {

  constructor(public char:CharacterService,
    public info: InfoPaneService) { }

  @Input() merit:IMeritRef =this.info.merit;

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
  }
}
