import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-info-specialties',
  templateUrl: './info-specialties.component.html',
  styleUrls: ['./info-specialties.component.css']
})
export class InfoSpecialtiesComponent implements OnInit {

  constructor(public char: CharacterService) { }

  ngOnInit(): void {
  }

}
