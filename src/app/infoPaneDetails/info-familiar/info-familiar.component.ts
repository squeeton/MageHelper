import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-info-familiar',
  templateUrl: './info-familiar.component.html',
  styleUrls: ['./info-familiar.component.css']
})
export class InfoFamiliarComponent implements OnInit {

  constructor(public char: CharacterService) { }

  ngOnInit(): void {
  }

}
