import { Component, OnInit, AfterContentInit, Input, AfterViewInit } from '@angular/core';
import IDotUpdate from 'src/app/models/dot-update.model';
import { ICharacter } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/data.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { InfoPaneService } from 'src/app/services/info-pane.service';
import { AuthService } from 'src/app/services/auth.service';
import { CharacterService } from 'src/app/services/character.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(
    private db: DataService,
    public info: InfoPaneService,
    public auth: AuthService,
    public char: CharacterService
  ) {

  }
  characterID = '';
  attributeDot = '2xl';
  editMode = false;


  get charSheetPosition() {
    if (this.info.visible) {
      return `mr-[550px]`
    }
    else return ''
  }

    async ngOnInit(): Promise<void> {
    //this function fires as soon as the user observable shows a user is logged in.
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.char.setInitialCharacter(user.uid);
      }
    });



  }

  allowEdit() {
    this.char.editMode = true;
  }

  endEdit() {
    this.char.editMode = false;
    this.char.saveCharacter();
  }

  editDots($event: IDotUpdate) {
    this.char.updateCharFromPath($event.path, $event.val);
  }

  openInfoPane() {
    this.info.openPane();
  }

  closeInfoPane() {
    this.info.closePane();
  }
}
