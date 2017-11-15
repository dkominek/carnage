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
import { HeaderComponent } from './header/header.component';
import { PlayerIndicatorComponent } from './player-indicator/player-indicator.component';
import { SelectCharactersComponent } from './select-characters/select-characters.component';
import { ViewGamesComponent } from './view-games/view-games.component';
import { PlayerCartComponent } from './player-cart/player-cart.component';
import { CharacterAvatarComponent } from './character-avatar/character-avatar.component';
import { DiscoverService } from './discover.service';
import { ImagePreloaderService } from './image-preloader.service';

@NgModule({
  declarations: [
      AppComponent,
      PlayerSetupComponent,
      CharacterPageComponent,
      AddPlayerComponent,
      HeaderComponent,
      PlayerIndicatorComponent,
      SelectCharactersComponent,
      ViewGamesComponent,
      PlayerCartComponent,
      CharacterAvatarComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RoutingModule
  ],
  providers: [CharacterService, PlayerService, DiscoverService, ImagePreloaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
