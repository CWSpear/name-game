import { Routes } from '@angular/router';
import { HomeComponent } from './app/+home/home.component';
import { GamesComponent } from './app/+games/games.component';
import { NewGameComponent } from './app/+new-game/new-game.component';
import { GameComponent } from './app/+game/game.component';
import { PlayGameComponent } from './app/+play-game/play-game.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [],
  },
  {
    path: 'games',
    component: GamesComponent,
    children: [],
  },
  {
    path: 'games/:id',
    component: GameComponent,
    children: [],
  },
  {
    path: 'games/:id/play',
    component: PlayGameComponent,
    children: [],
  },
  {
    path: 'new-game',
    component: NewGameComponent,
    children: [],
  },
];

