import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-info-stats',
  templateUrl: './info-stats.component.html',
  styleUrls: ['./info-stats.component.css']
})
export class InfoStatsComponent implements OnInit {

  constructor(public char: CharacterService) { }

  ngOnInit(): void {
  }

}
