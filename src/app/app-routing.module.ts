import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './characters/character/character.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterService } from './services/character.service';
import { DataService } from './services/data.service';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/');

const routes: Routes = [ {
  path: '',
  component: HomeComponent
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
