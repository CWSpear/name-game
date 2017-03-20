import { Routes } from '@angular/router';
import { HomeComponent } from './app/+home/home.component';
import { GamesComponent } from './app/+games/games.component';
import { NewGameComponent } from './app/+new-game/new-game.component';
import { GameComponent } from './app/+game/game.component';
import { PlayGameComponent } from './app/+play-game/play-game.component';
import { GamesResolver } from './app/services/resolvers/games-resolver/games-resolver.service';
import { GameResolver } from './app/services/resolvers/game-resolver/game-resolver.service';
import { PlayersResolver } from './app/services/resolvers/players-resolver/players-resolver.service';
import { GameStartedGuard } from './app/services/guards/game-started-guard/game-started-guard.service';

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
    resolve: {
      games: GamesResolver,
    },
  },
  {
    path: 'games/:id',
    component: GameComponent,
    children: [],
    resolve: {
      game: GameResolver,
      players: PlayersResolver,
    },
    canActivate: [GameStartedGuard],
  },
  {
    path: 'games/:id/play',
    component: PlayGameComponent,
    children: [],
    resolve: {
      game: GameResolver,
      players: PlayersResolver,
    },
  },
  {
    path: 'new-game',
    component: NewGameComponent,
    children: [],
  },
];

