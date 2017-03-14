import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './+games/games.component';
import { HomeComponent } from './+home/home.component';
import { NewGameComponent } from './+new-game/new-game.component';
import { GameComponent } from './+game/game.component';
import { UserService } from './services/user/user.service';
import { PlayGameComponent } from './+play-game/play-game.component';
import { Game } from './services/models/game/game.service';
import { Player } from './services/models/player/player.service';
import { FeathersService } from './services/feathers/feathers.service';
import { RedirectDirective } from './directives/redirect/redirect.directive';
import { GamesResolver } from './services/resolvers/games-resolver/games-resolver.service';
import { GameResolver } from './services/resolvers/game-resolver/game-resolver.service';
import { PlayersResolver } from './services/resolvers/players-resolver/players-resolver.service';
import { GameStartedGuard } from './services/guards/game-started-guard/game-started-guard.service';
import { PagerComponent } from './pager/pager.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    GamesComponent,
    HomeComponent,
    NewGameComponent,
    GameComponent,
    PlayGameComponent,
    RedirectDirective,
    PagerComponent,
  ],
  providers: [
    UserService,
    Game,
    Player,
    FeathersService,
    GamesResolver,
    GameResolver,
    PlayersResolver,
    GameStartedGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
