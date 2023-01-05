import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, QuerySnapshot } from '@angular/fire/compat/firestore'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap, map } from 'rxjs/operators';
import { of, BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { idTokenResult } from '@angular/fire/compat/auth-guard';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import ISpell from '../models/spell.model';
import { GlobalRefs } from './GlobalRefs';
import { ICharacter } from '../models/character.model';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private refs: GlobalRefs,
    private db: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router) {
    this.spellsCollection = db.collection('spells');
    this.characterCollection = db.collection('characters');
  }


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
    // console.log(allSpells);


    const events = query.get().then((querySnapshot) => {
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      console.log(tempDoc)
    })



  }

  async getCharacter(uid: string) {

    let char: ICharacter;
    let id: string;
    let returnValue : {
      id: string,
      char: ICharacter
    }
    const querySnapshot = await this.characterCollection.ref.where('uid', '==', uid).limit(1).get()

    if (querySnapshot.docs.length > 0) {
      const doc = await querySnapshot.docs[0];

      returnValue = {id: doc.id, char: doc.data()};

      return returnValue;
    }
    else {
      let character = {
        uid: uid,
        details: {
          characterName: '',
          shadowName: '',
          virtue: '',
          vice: ' ',
          path: '',
          order: '',
          legacy: ''
        },
        attributes: {
          intelligence: 1,
          wits: 1,
          resolve: 1,
          strength: 1,
          dexterity: 1,
          stamina: 1,
          presence: 1,
          manipulation: 1,
          composure: 1
        },
        skills: {
          // Mental
          academics: 0,
          computer: 0,
          crafts: 0,
          investigation: 0,
          medicine: 0,
          occult: 0,
          politics: 0,
          science: 0,
          // Physical
          athletics: 0,
          brawl: 0,
          drive: 0,
          firearms: 0,
          larceny: 0,
          stealth: 0,
          survival: 0,
          weaponry: 0,
          // Social
          animalKen: 0,
          empathy: 0,
          expression: 0,
          intimidation: 0,
          persuasion: 0,
          socialize: 0,
          streetwise: 0,
          subterfuge: 0
        },
        arcana: {
          death: 0,
          fate: 0,
          forces: 0,
          life: 0,
          matter: 0,
          mind: 0,
          prime: 0,
          spirit: 0,
          space: 0,
          time: 0
        },
        merits: {},
        stats: {
          health: 7,
          bashingDamage: 0,
          lethalDamage: 0,
          aggravatedDamage: 0,
          willpower: 7,
          usedWillpower: 0,
          gnosis: 2,
          maxMana: 3,
          remainingMana: 3,
          wisdom: 7,
          size: 5,
          speed: 8,
          defense: 5,
          armor: 2,
          initiativeMod: 4,
          experience: 2,
          arcaneExperiences: 1
        },
        spells: [
        ],
        rotes: [],
        praxis: []
      }

      let q = this.characterCollection.add(character);
      id = (await q).id;
      returnValue = {id, char: (character as ICharacter)}

      return returnValue;
    }
  }

  createCharacter() {

  }

  updateCharacter(id: string, char: ICharacter) {
    return this.characterCollection.doc(id).update(char);
  }
}
