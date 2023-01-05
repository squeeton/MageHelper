import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CharacterService } from 'src/app/services/character.service';
import { IDetails } from 'src/app/models/character.model';

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.css']
})
export class InfoDetailsComponent implements OnInit {

  constructor(public char: CharacterService) { }
  ngOnInit(): void {
  }

}
