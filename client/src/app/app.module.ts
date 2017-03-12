import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './+games/games.component';
import { HomeComponent } from './+home/home.component';
import { NewGameComponent } from './+new-game/new-game.component';
import { GameComponent } from './+game/game.component';
import { UserService } from './services/user/user.service';
import { PlayGameComponent } from './+play-game/play-game.component';
import { GameService } from './services/models/game/game.service';
import { PlayerService } from './services/models/player/player.service';
import { CurrentGame } from './services/current-game/current-game.service';
import { FeathersService } from './services/feathers/feathers.service';
import { CurrentPlayers } from './services/current-players/current-players.service';
import { RedirectDirective } from './directives/redirect/redirect.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    GamesComponent,
    HomeComponent,
    NewGameComponent,
    GameComponent,
    PlayGameComponent,
    RedirectDirective,
  ],
  providers: [
    UserService,
    GameService,
    PlayerService,
    CurrentGame,
    CurrentPlayers,
    FeathersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
