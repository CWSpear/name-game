import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { IGame } from '../../../../../types';
import { Game } from '../../models/game/game.service';

@Injectable()
export class GameResolver implements Resolve<IGame> {
  constructor(private gameModel: Game) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<IGame> {
    const id = route.params['id'];
    if (!this.gameModel.currentGame || this.gameModel.currentGame.id !== id) {
      await this.gameModel.setCurrentGameById(id);
    }

    return this.gameModel.currentGame;
  }
}
