import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css']
})
export class AddCampaignComponent implements OnInit {

  constructor(public db: DataService,
    private router: Router) { }
  wait = false;

  ngOnInit(): void {
  }
  name = '';
  desc = '';

  async createCampaign() {

    this.wait = true;
    let newID = await this.db.newCampaign(this.name, this.desc);

    this.router.navigate([`/campaign/${newID.id}`]);

  }
}
