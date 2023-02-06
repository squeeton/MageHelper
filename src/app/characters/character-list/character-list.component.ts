import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/data.service';
import { CharacterService } from 'src/app/services/character.service';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  constructor(public db: DataService,
    public char: CharacterService,
    public modal: ModalService,
    private router: Router) {
    if (db.uid != '') {
      this.loadCharacters(db.uid)
    }
  }

  confirmDeleteInput = '';
  wait = false;

  characterList: Array<{
    id: string,
    char: ICharacter
  }> = [];

  characterInQuestion: {
    id: string,
    char: ICharacter
  } | null = null;

  ngOnInit(): void {
    this.modal.register('confirmDelete');
  }

  ngOnDestroy(): void {
    this.modal.unregister('confirmDelete');
  }

  setCharacter(id: string, character: ICharacter) {
    this.char.characterID = id;
    this.char.character = character;
  }


  async loadCharacters(uid: string) {
    let x = await this.db.getAllUserCharacters(uid);
    this.characterList = x;
  }

  getDisplayName(character: ICharacter) {

    let displayName = '';
    if (character.details.characterName.length > 0 && character.details.shadowName.length > 0) {
      displayName = character.details.characterName + ' - ' + character.details.shadowName;
    }
    else if (character.details.characterName.length > 0 && character.details.shadowName.length == 0) {
      displayName = character.details.characterName
    }
    else if (character.details.characterName.length == 0 && character.details.shadowName.length > 0) {
      displayName = character.details.shadowName
    }
    return displayName;
  }


  confirmDelete(id: string, char: ICharacter) {
    this.characterInQuestion = { id: id, char: char };
    this.modal.toggleModal('confirmDelete');
  }

  async actuallyDelete() {
    this.wait = true;

    const success = await this.db.deleteCharacter(this.characterInQuestion?.id as string);

    if (success) {
      this.characterList = this.characterList.filter(e => e.id != this.characterInQuestion?.id);
      this.modal.toggleModal('confirmDelete');
    }
    else {

    }
    this.confirmDeleteInput = '';
    this.wait = false
  }

  async addNewCharacter() {
    if (this.characterList.length < 4) {
      this.wait = true;
      let newID = await this.db.newCharacter();
      
      this.router.navigate([`/character/${newID.id}`]);
    }
    else {
      this.tooManyCharacters();
    }
  }

  tooManyCharacters() {

  }

}
