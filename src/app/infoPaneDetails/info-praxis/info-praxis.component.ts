import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-info-praxis',
  templateUrl: './info-praxis.component.html',
  styleUrls: ['./info-praxis.component.css']
})
export class InfoPraxisComponent implements OnInit {

  constructor(public char: CharacterService) { }


  ngOnInit(): void {
    this.char.addSpell = true;
    this.char.addType = 'Praxis';
  }

  ngOnDestroy(): void {
    this.char.addSpell = false;
    this.char.addType = '';
  }

}
