import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { PlayerSetupComponent } from './player-setup/player-setup.component';

@NgModule({
  declarations: [
      AppComponent,
      PlayerSetupComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
