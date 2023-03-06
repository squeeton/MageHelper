import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ICampaignFull from 'src/app/models/campaignFull.model';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import ICampaign from 'src/app/models/campaign.model';
import ICharOwner from 'src/app/models/CharOwner.model';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  constructor(
    private db: DataService,
    private router: Router,
    public route: ActivatedRoute,
    public modal: ModalService
  ) {
    this.routeSub = this.route.params.subscribe(params => {
      this.campaignID = params['id'] //log the value of id
    });
  }


  private routeSub: Subscription;

  wait = false;
  campaignID = '';
  characterInQuestion: ICharOwner = { name: '', owner: '', charID: '', path: '', order: '', legacy: '' };
  confirmDeleteInput = '';

  campaign: ICampaignFull = {
    uid: '',
    name: '',
    desc: '',
    characters: []
  }


  async ngOnInit(): Promise<void> {
    let campaign = await this.db.getCampaign(this.campaignID);
    if (campaign.campaign != null) {
      this.setCampaign(campaign.id, campaign.campaign);
    }
    else {
      this.router.navigate(['/**']);
    }
  }


  setCampaign(id: string, camp: ICampaignFull) {
    this.campaignID = id;
    this.campaign = camp;
  }


  setCharacter(id: string) {
    // this.char.characterID = id;
  }

  confirmRemove(id: string, char:ICharOwner) {
    this.characterInQuestion = char;
    this.modal.toggleModal('confirmDelete');
  }

  async actuallyDelete() {
    this.wait = true;

    let updatedCampaign:ICampaign ={
    uid: this.campaign.uid,
    name:this.campaign.name,
    desc: this.campaign.desc,
    characters:[]
    }
    for(let i=0;i<this.campaign.characters.length;i++){
      if(this.campaign.characters[i] != this.characterInQuestion ){
        updatedCampaign.characters.push(this.campaign.characters[i].charID);
      }
    }

    const success = await this.db.removeCharacterFromCampaign(this.campaignID, this.characterInQuestion.charID);

    if (success) {
      this.campaign.characters = this.campaign.characters.filter(e => e.charID != this.characterInQuestion.charID);
      this.modal.toggleModal('confirmDelete');
    }
    else {

    }
    this.confirmDeleteInput = '';
    this.wait = false
  }
}
