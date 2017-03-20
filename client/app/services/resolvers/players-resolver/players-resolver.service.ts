import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { IPlayer } from '../../../../../types';
import { Player } from '../../models/player/player.service';

@Injectable()
export class PlayersResolver implements Resolve<IPlayer[]> {
  constructor(private playerModel: Player) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<IPlayer[]> {
    const id = route.params['id'];
    if (this.playerModel.currentGameId !== id) {
      await this.playerModel.setCurrentPlayersByGameId(id);
    }

    return this.playerModel.currentPlayers;
  }
}
