// talk through this

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamCreateComponent } from './components/team/team-create/team-create.component';
import { TeamIndexComponent } from './components/team/team-index/team-index.component';
import { PlayerIndexComponent } from './components/player/player-index/player-index.component';
import { PlayerCreateComponent } from './components/player/player-create/player-create.component';
import { TeamService } from './services/team.service';
import { PlayerService } from './services/player.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamCreateComponent,
    TeamIndexComponent,
    PlayerIndexComponent,
    PlayerCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ TeamService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
