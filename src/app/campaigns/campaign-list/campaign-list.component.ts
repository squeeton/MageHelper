import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ICampaign from 'src/app/models/campaign.model';
import { ICharacter } from 'src/app/models/character.model';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  constructor(public db: DataService,
    public modal: ModalService,
    private router: Router) {
    if (db.uid != '') {
      this.loadCampaigns(db.uid)
    }
  }

  confirmDeleteInput = '';
  wait = false;

  campaignList: Array<{
    id: string,
    campaign: ICampaign
  }> = [];

  campaignInQuestion: {
    id: string,
    campaign: ICampaign
  } | null = null;

  ngOnInit(): void {
    this.modal.register('confirmDelete');
  }

  ngOnDestroy(): void {
    this.modal.unregister('confirmDelete');
  }

  confirmDelete(id: string, campaign: ICampaign) {
    this.campaignInQuestion = { id: id, campaign: campaign };
    this.modal.toggleModal('confirmDelete');
  }

  async actuallyDelete() {
    this.wait = true;

    const success = await this.db.deleteCharacter(this.campaignInQuestion?.id as string);

    if (success) {
      this.campaignList = this.campaignList.filter(e => e.id != this.campaignInQuestion?.id);
      this.modal.toggleModal('confirmDelete');
    }
    else {

    }
    this.confirmDeleteInput = '';
    this.wait = false
    
  }

  async addNewCampaign() {
    if (this.campaignList.length < 4) {
      this.wait = true;      
      this.router.navigate([`/addCampaign`]);
    }
    else {
      this.tooManyCharacters();
    }
  }

  tooManyCharacters() {

  }

  async loadCampaigns(uid: string) {
    let x = await this.db.getAllUserCampaigns(uid);
    this.campaignList = x;
  }


}
