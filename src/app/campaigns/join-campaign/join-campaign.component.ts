import { Component, OnInit } from '@angular/core';
import ICampaign from 'src/app/models/campaign.model';
import { ICharacter } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timeout } from 'rxjs';

@Component({
  selector: 'app-join-campaign',
  templateUrl: './join-campaign.component.html',
  styleUrls: ['./join-campaign.component.css']
})
export class JoinCampaignComponent implements OnInit {

  constructor(public db: DataService,
    public modal: ModalService,
    private router: Router,
    public route: ActivatedRoute) {
    if (db.uid != '') {
      this.loadCharacters(db.uid)
    }
    this.routeSub = this.route.params.subscribe(params => {
      this.campaignID = params['id'] //log the value of id
    });
  }

  private routeSub: Subscription;
  campaignID = '';
  wait = false;

  campaign: ICampaign = { uid: '', name: '', desc: '', characters: [] };

  characterList: Array<{
    id: string,
    char: ICharacter
  }> = [];

  selectedCharacter: {
    id: string,
    char: ICharacter
  } | undefined;

  async ngOnInit(): Promise<void> {
    let campaignRef = await this.db.getCampaignPure(this.campaignID);
    if (campaignRef.campaign != null) {
      this.campaign = campaignRef.campaign;
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  async loadCharacters(uid: string) {
    let x = await this.db.getAllUserCharacters(uid);
    for (let i = 0; i < x.length; i++) {
      if (x[i].char.campaign == '') {
        this.characterList.push(x[i]);
      }
    }
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

  setCharacter(id: string, char: ICharacter) {
    this.selectedCharacter = { id, char };
  }

  joinCampaign() {
    this.wait = true;
    if (this.selectedCharacter) {
      this.selectedCharacter.char.campaign = this.campaignID;
      this.db.updateCharacter(this.selectedCharacter.id, this.selectedCharacter.char);
      this.campaign.characters.push(this.selectedCharacter.id)
      this.db.updateCampaign(this.campaignID, this.campaign);
      setTimeout(() => {
        this.router.navigate([`/campaign/${this.campaignID}`]);
      }, 200);
    }
  }

}
