import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-arcanum-marker',
  templateUrl: './arcanum-marker.component.html',
  styleUrls: ['./arcanum-marker.component.css']
})
export class ArcanumMarkerComponent implements OnInit {


  constructor(public char: CharacterService) { }

  @Input() arcanum = '';

  get getIcon() {
    let icon;
    if (this.char.character.arcana.rulingArcanum.includes(this.arcanum)) {
      icon = 'circle';
    }
    else if (this.char.character.arcana.inferiorArcanum.includes(this.arcanum)) {
      icon = 'hide_source';
    }
    else {
      icon = 'circle';
    }
    return icon;
  }

  get getClass() {
    let css;
    if (this.char.character.arcana.rulingArcanum.includes(this.arcanum)) {
      css = 'filled text-sm';
    }
    else if (this.char.character.arcana.inferiorArcanum.includes(this.arcanum)) {
      css = 'filled text-sm ';
    }
    else {
      css = 'opacity-20 text-sm ';
    }

    if (this.char.editMode) {
      css = css + ' hover:cursor-pointer'
    }
    return css;
  }

  ngOnInit(): void {
  }

  changeType() {
    if (this.char.editMode) {
      let rulingArcanum = [...this.char.character.arcana.rulingArcanum]
      let inferiorArcanum = [...this.char.character.arcana.inferiorArcanum]

      if (this.char.character.arcana.rulingArcanum.includes(this.arcanum)) {
        rulingArcanum = rulingArcanum.filter(e => e != this.arcanum);
        inferiorArcanum.push(this.arcanum);
        this.char.updateMajorInferiorArcanum(rulingArcanum, inferiorArcanum);
      }
      else if (this.char.character.arcana.inferiorArcanum.includes(this.arcanum)) {
        inferiorArcanum = inferiorArcanum.filter(e => e != this.arcanum);
        this.char.updateMajorInferiorArcanum(rulingArcanum, inferiorArcanum);
      }
      else {
        rulingArcanum.push(this.arcanum);
        this.char.updateMajorInferiorArcanum(rulingArcanum, inferiorArcanum);

      }

    }
  }

  getDots() {
  }

}
