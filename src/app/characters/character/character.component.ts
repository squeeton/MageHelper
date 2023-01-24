import { Component, OnInit, AfterContentInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import IDotUpdate from 'src/app/models/dot-update.model';
import { ICharacter } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/data.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { InfoPaneService } from 'src/app/services/info-pane.service';
import { AuthService } from 'src/app/services/auth.service';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {

  constructor(
    private db: DataService,
    public info: InfoPaneService,
    public auth: AuthService,
    public char: CharacterService,
    public route: ActivatedRoute,
    private router: Router
  ) {
    this.routeSub = this.route.params.subscribe(params => {
      this.characterID = params['id'] //log the value of id
    });
  }
  private routeSub: Subscription;

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
    let character = await this.db.getCharacter(this.characterID);
    if(character.char != null){
      this.char.setCharacter(character.id, character.char);
    }
    else{      
      this.router.navigate(['/**']);
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
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
