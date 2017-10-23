import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { PlayerSetupComponent } from './player-setup/player-setup.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharacterService } from './character.service';
import { PlayerService } from './player.service';
import { AddPlayerComponent } from './add-player/add-player.component';

@NgModule({
  declarations: [
      AppComponent,
      PlayerSetupComponent,
      CharacterPageComponent,
      AddPlayerComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RoutingModule
  ],
  providers: [CharacterService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
