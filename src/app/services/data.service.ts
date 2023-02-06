import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, QuerySnapshot } from '@angular/fire/compat/firestore'
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap, map } from 'rxjs/operators';
import { of, BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { idTokenResult } from '@angular/fire/compat/auth-guard';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import ISpell from '../models/spell.model';
import { GlobalRefs } from './GlobalRefs';
import { ICharacter } from '../models/character.model';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private refs: GlobalRefs,
    private db: AngularFirestore) {
    this.spellsCollection = db.collection('spells');
    this.characterCollection = db.collection('characters');


    let userID = firebase.auth().currentUser;
    if (userID) {
      this.uid = userID.uid;
    }

  }
  uid: string = '';
  public spellsCollection: AngularFirestoreCollection<ISpell>;
  public characterCollection: AngularFirestoreCollection<ICharacter>;

  pendingReq = false;

  seedFirebase() {
    //documents spells json
  }

  async getAllSpells() {


    const query = this.spellsCollection.ref
      .orderBy('arcanum', 'asc')
      .orderBy('dots', 'asc')
      .orderBy('name', 'asc');

    // const spalls = await query.get();

    // let allSpells = []
    // spalls.docs.map(doc => (allSpells.push(doc.data())));


    const events = query.get().then((querySnapshot) => {
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
    })



  }

  async getCharacter(charID: string) {

    let returnValue: {
      id: string,
      char: ICharacter | null
    } = { id: 'Not Found', char: null }

    const characterRef = this.characterCollection.ref.doc(charID);
    const doc = await characterRef.get();

    if (doc.exists) {
      let character: ICharacter = doc.data() as ICharacter

      returnValue = { id: doc.id, char: character };
      if (returnValue.char != null && returnValue.char.specialities == undefined) {
        console.log('adding specs');
        returnValue.char.specialities = {
          "weaponry": '',
          "computer": '',
          "occult": '',
          "animalKen": '',
          "intimidation": '',
          "empathy": '',
          "drive": '',
          "subterfuge": '',
          "survival": '',
          "streetwise": '',
          "stealth": '',
          "larceny": '',
          "investigation": '',
          "medicine": '',
          "academics": '',
          "science": '',
          "firearms": '',
          "socialize": '',
          "expression": '',
          "brawl": '',
          "crafts": '',
          "athletics": '',
          "persuasion": '',
          "politics": ''
        }
      }
      if(returnValue.char != null && returnValue.char.createdWhen == undefined){
        returnValue.char.createdWhen = new Date()
      }
      return returnValue;
    }
    else {
      return returnValue;
    }


  }

  async newCharacter() {
    const char: ICharacter = {
      createdWhen:new Date(),
      praxis: [],
      uid: this.uid,
      spells: [],
      details: {
        "characterName": "Character Name",
        "path": "",
        "legacy": "",
        "vice": "",
        "virtue": "",
        "order": "",
        "shadowName": ""
      },
      stats: {
        "size": 5,
        "armor": 2,
        "arcaneExperiences": 0,
        "health": 7,
        "wisdom": 7,
        "willpower": 7,
        "initiativeMod": 4,
        "experience": 0,
        "usedWillpower": 0,
        "defense": 5,
        "speed": 8,
        "gnosis": 2,
        "aggravatedDamage": 0,
        "lethalDamage": 0,
        "remainingMana": 3,
        "maxMana": 0,
        "bashingDamage": 0,
        "aspirations": '',
        "obsessions": ''
      },
      skills: {
        "weaponry": 0,
        "computer": 0,
        "occult": 0,
        "animalKen": 0,
        "intimidation": 0,
        "empathy": 0,
        "drive": 0,
        "subterfuge": 0,
        "survival": 0,
        "streetwise": 0,
        "stealth": 0,
        "larceny": 0,
        "investigation": 0,
        "medicine": 0,
        "academics": 0,
        "science": 0,
        "firearms": 0,
        "socialize": 0,
        "expression": 0,
        "brawl": 0,
        "crafts": 0,
        "athletics": 0,
        "persuasion": 0,
        "politics": 0
      },
      specialities: {
        "weaponry": '',
        "computer": '',
        "occult": '',
        "animalKen": '',
        "intimidation": '',
        "empathy": '',
        "drive": '',
        "subterfuge": '',
        "survival": '',
        "streetwise": '',
        "stealth": '',
        "larceny": '',
        "investigation": '',
        "medicine": '',
        "academics": '',
        "science": '',
        "firearms": '',
        "socialize": '',
        "expression": '',
        "brawl": '',
        "crafts": '',
        "athletics": '',
        "persuasion": '',
        "politics": ''
      },
      merits: [],
      tilts: [],
      conditions: [],
      arcana: {
        rulingArcanum: [],
        inferiorArcanum: [],
        "fate": 0,
        "time": 1,
        "mind": 0,
        "matter": 0,
        "spirit": 2,
        "life": 0,
        "prime": 0,
        "space": 0,
        "forces": 0,
        "death": 3
      },
      attributes: {
        "wits": 1,
        "manipulation": 1,
        "strength": 1,
        "dexterity": 1,
        "intelligence": 1,
        "stamina": 1,
        "presence": 1,
        "composure": 1,
        "resolve": 1
      },
      rotes: [],
      familiar: {
        name: '',
        health: 0,
        damage: 0,
        virtue: '',
        vice: '',
        type: '',
        willpower: 0,
        usedWillpower: 0,
        initiative: 0,
        defense: 0,
        speed: 0,
        size: 0,
        language: '',
        rank: 0,
        ban: '',
        bane: '',
        essence: 0,
        mana: 0,
        power: 0,
        finesse: 0,
        resistance: 0
      },
      notes: ''
    }
    const res = await this.characterCollection.add(char);
    return res;

  }

  async deleteCharacter(id: string) {
    try {
      const res = await this.characterCollection.doc(id).delete();
      return true;
    }
    catch (e) {
      console.error(e)
      return false;
    }
  }

  async getAllUserCharacters(uid: string) {
    let char: ICharacter;
    let id: string;
    let returnValue: Array<{
      id: string,
      char: ICharacter
    }> = [];
    const querySnapshot = await this.characterCollection.ref.where('uid', '==', uid).get()

    for (let i = 0; i < querySnapshot.docs.length; i++) {
      returnValue.push({ id: querySnapshot.docs[i].id, char: querySnapshot.docs[i].data() })
    }

    return returnValue;
  }

  updateCharacter(id: string, char: ICharacter) {
    return this.characterCollection.doc(id).update(char);
  }
}
