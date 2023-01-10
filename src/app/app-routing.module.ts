import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './characters/character/character.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/');

const routes: Routes = [ {
  path: '',
  component: HomeComponent
},
{
  path: 'characters',
  component: CharacterComponent,
  data: {
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
