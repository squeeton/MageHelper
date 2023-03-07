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
import ICampaign from '../models/campaign.model';
import ICampaignFull from '../models/campaignFull.model';
import IUser from '../models/user.model';
import ICharOwner from '../models/CharOwner.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private refs: GlobalRefs,
    private db: AngularFirestore) {
    this.spellsCollection = db.collection('spells');
    this.characterCollection = db.collection('characters');
    this.campaignCollection = db.collection('campaigns');
    this.userCollection = db.collection('users');


    let userID = firebase.auth().currentUser;
    if (userID) {
      this.uid = userID.uid;
      this.getUserType(userID.uid);
    }

  }
  uid: string = '';
  userType: boolean = false;

  public spellsCollection: AngularFirestoreCollection<ISpell>;
  public characterCollection: AngularFirestoreCollection<ICharacter>;
  public campaignCollection: AngularFirestoreCollection<ICampaign>;
  public userCollection: AngularFirestoreCollection<IUser>;

  pendingReq = false;

  seedFirebase() {
    //documents spells json
  }

async getUserType(uid:string){
  const userRef = this.userCollection.ref.doc(uid);
  const doc = await userRef.get();
  if(doc.data()){
    this.userType = !!(doc.data()?.premium);
  }
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
      if (returnValue.char != null && returnValue.char.attainments == undefined) {
        console.log('adding attainments');
        returnValue.char.attainments = [];
      }
      if (returnValue.char != null && returnValue.char.campaign == undefined) {
        console.log('adding campaign');
        returnValue.char.campaign = '';
      }
      if (returnValue.char != null && returnValue.char.createdWhen == undefined) {
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
      createdWhen: new Date(),
      campaign: '',
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
      attainments: [],
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

  async getCampaign(campaignID: string) {

    let returnValue: {
      id: string,
      campaign: ICampaignFull
    } = { id: 'Not Found', campaign: { uid: '', name: '', desc: '', characters: [] } }

    console.log('getting campaign', campaignID);
    const campaignRef = this.campaignCollection.ref.doc(campaignID);
    const campaignDoc = await campaignRef.get();

    if (campaignDoc.exists) {
      let campaignBase: ICampaign = campaignDoc.data() as ICampaign
      console.log('got  campaign', campaignBase);
      returnValue.id = campaignDoc.id;
      returnValue.campaign.name = campaignBase.name;
      returnValue.campaign.uid = campaignBase.uid;
      returnValue.campaign.desc = campaignBase.desc;


      for (let i = 0; i < campaignBase.characters.length; i++) {
        let charBuffer: ICharOwner = {
          name: '',
          owner: '',
          charID: '',
          path: '',
          order: '',
          legacy: ''
        }
        const charRef = this.characterCollection.ref.doc(campaignBase.characters[i]);
        const charDoc = await charRef.get()
        let deets = charDoc.data()?.details;
        if (charDoc.exists && deets) {
          charBuffer.name = this.getDisplayName(charDoc.data() as ICharacter);
          charBuffer.path = deets.path;
          charBuffer.order = deets.order;
          charBuffer.legacy = deets.legacy;
          charBuffer.charID = campaignBase.characters[i];

          const userRef = this.userCollection.ref.doc(charDoc.data()?.uid);
          const userDoc = await userRef.get()
          const name = userDoc.data()?.name
          if (userDoc.exists && name) {
            charBuffer.owner = name;
          }

          returnValue.campaign.characters.push(charBuffer);
        }

      }
    }
    console.log('returnVal', returnValue);
    return returnValue;
  }
  async getCampaignPure(campaignID: string) {

    let returnValue: {
      id: string,
      campaign: ICampaign
    } = { id: 'Not Found', campaign: { uid: '', name: '', desc: '', characters: [] } }

    const campaignRef = this.campaignCollection.ref.doc(campaignID);
    const campaignDoc = await campaignRef.get();
    if (campaignDoc) {
      returnValue.id = campaignDoc.id;
      returnValue.campaign = campaignDoc.data() as ICampaign;
    }
    return returnValue;
  }

  updateCampaign(id: string, campaign: ICampaign) {
    try {
      this.campaignCollection.doc(id).update(campaign);
      return true;
    }
    catch (e) {
      console.error(e)
      return false;
    }

  }

  async removeCharacterFromCampaign(campaignID: string, charID: string) {
    try {
      let camp = (await this.getCampaignPure(campaignID)).campaign;
      let char = (await this.getCharacter(charID)).char;
      if (char) {
        char.campaign = '';
        this.updateCharacter(charID, char);
      }
      if (camp) {
        camp.characters = camp.characters.filter(e => e !== charID);
        this.updateCampaign(campaignID, camp);
      }

      return true;
    }
    catch (e) {
      console.error(e)
      return false;
    }
  }

  async newCampaign(name: string, desc: string) {
    const camp: ICampaign = {
      uid: this.uid,
      name: name,
      desc: desc,
      characters: []
    }
    const res = await this.campaignCollection.add(camp);
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

  async getAllUserCampaigns(uid: string) {
    let returnValue: Array<{
      id: string,
      campaign: ICampaign
    }> = [];
    const querySnapshot = await this.campaignCollection.ref.where('uid', '==', uid).get()

    for (let i = 0; i < querySnapshot.docs.length; i++) {
      returnValue.push({ id: querySnapshot.docs[i].id, campaign: querySnapshot.docs[i].data() })
    }

    return returnValue;
  }

  updateCharacter(id: string, char: ICharacter) {
    return this.characterCollection.doc(id).update(char);
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
}
