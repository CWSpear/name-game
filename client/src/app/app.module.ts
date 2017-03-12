import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameComponent } from './game/game.component';
import { UserService } from '../services/user/user.service';
import { PlayGameComponent } from './play-game/play-game.component';

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
  ],
  providers: [
      UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
