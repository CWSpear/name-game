import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { IGame } from '../../../../../types';
import { GameService } from '../../models/game/game.service';
import { CurrentGame } from '../../current-game/current-game.service';

@Injectable()
export class GameResolver implements Resolve<IGame> {
  constructor(private gameService: GameService, private currentGame: CurrentGame) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<IGame> {
    const id = route.params['id'];
    if (this.gameService.currentGameId !== id) {
      await this.gameService.setCurrentGameId(id);
    }

    return this.currentGame.game;
  }
}
