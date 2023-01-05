import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterComponent } from './characters/character/character.component';
import { SharedModule } from './shared/shared.module';
import { HealthbarComponent } from './characters/healthbar/healthbar.component';
import { InfoPaneComponent } from './infoPaneDetails/info-pane/info-pane.component';
import { SpellsTabComponent } from './characters/spells-tab/spells-tab.component';
import { InfoRotesComponent } from './infoPaneDetails/info-rotes/info-rotes.component';
import { InfoSpellsComponent } from './infoPaneDetails/info-spells/info-spells.component';
import { InfoSingleSpellComponent } from './infoPaneDetails/info-single-spell/info-single-spell.component';
import { InfoSpellListComponent } from './infoPaneDetails/info-spell-list/info-spell-list.component';
import { InfoDetailsComponent } from './infoPaneDetails/info-details/info-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InfoPraxisComponent } from './infoPaneDetails/info-praxis/info-praxis.component';
import { InfoStatsComponent } from './infoPaneDetails/info-stats/info-stats.component';
import { StatsTabComponent } from './characters/stats-tab/stats-tab.component';
import { InfoMeritsComponent } from './infoPaneDetails/info-merits/info-merits.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    CharacterListComponent,
    CharacterComponent,
    HealthbarComponent,
    InfoPaneComponent,
    SpellsTabComponent,
    InfoRotesComponent,
    InfoSpellsComponent,
    InfoSingleSpellComponent,
    InfoSpellListComponent,
    InfoDetailsComponent,
    InfoPraxisComponent,
    InfoStatsComponent,
    StatsTabComponent,
    InfoMeritsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    UserModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
