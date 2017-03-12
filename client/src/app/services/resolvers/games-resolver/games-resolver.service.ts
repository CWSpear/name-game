import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { IGame } from '../../../../../types';
import { GameService } from '../../models/game/game.service';

@Injectable()
export class GamesResolver implements Resolve<IGame[]> {
  constructor(private gameService: GameService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<IGame[]> {
    return this.gameService.find();
  }
}
