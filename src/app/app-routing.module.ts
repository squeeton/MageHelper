import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './characters/character/character.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CampaignListComponent } from './campaigns/campaign-list/campaign-list.component';
import { AddCampaignComponent } from './campaigns/add-campaign/add-campaign.component';
import { CampaignComponent } from './campaigns/campaign/campaign.component';
import { CharacterService } from './services/character.service';
import { DataService } from './services/data.service';
import { JoinCampaignComponent } from './campaigns/join-campaign/join-campaign.component';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/');

const routes: Routes = [ {
  path: '',
  component: HomeComponent
},
{
  path: 'campaigns',
  component: CampaignListComponent,
  data: {
    authOnly: true,
    authGuardPipe:redirectUnauthorizedToHome
  },
  canActivate: [AngularFireAuthGuard]
},
{
  path: 'addCampaign',
  component: AddCampaignComponent,
  data: {
    authOnly: true,
    authGuardPipe:redirectUnauthorizedToHome
  },
  canActivate: [AngularFireAuthGuard]
},
{
  path: 'campaign/:id',
  component: CampaignComponent,
  data: {
    authOnly: true,
    authGuardPipe:redirectUnauthorizedToHome
  },
  canActivate: [AngularFireAuthGuard]
},
{
  path: 'joincampaign/:id',
  component: JoinCampaignComponent,
  data: {
    authOnly: true,
    authGuardPipe:redirectUnauthorizedToHome
  },
  canActivate: [AngularFireAuthGuard]
},
{
  path: 'characters',
  component: CharacterListComponent,
  data: {
    authOnly: true,
    authGuardPipe:redirectUnauthorizedToHome
  },
  canActivate: [AngularFireAuthGuard]
},
{
  path: 'character/:id',
  component: CharacterComponent,
  data: {
    char: CharacterService,
    authOnly: true,
    authGuardPipe:redirectUnauthorizedToHome
  },
  canActivate: [AngularFireAuthGuard]
},
// {
//   path: 'clip/:id',
//   component: ClipComponent,
//   resolve: {
//     clip: ClipService
//   }
// },
// {
//   path: '',
//   loadChildren: async () => (await import('./video/video.module')).VideoModule
// },
{
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
