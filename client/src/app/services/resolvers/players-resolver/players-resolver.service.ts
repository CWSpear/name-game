import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { IPlayer } from '../../../../../types';
import { PlayerService } from '../../models/player/player.service';
import { CurrentPlayers } from '../../current-players/current-players.service';

@Injectable()
export class PlayersResolver implements Resolve<IPlayer[]> {
  constructor(private playerService: PlayerService, private currentPlayers: CurrentPlayers) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<IPlayer[]> {
    const id = route.params['id'];
    if (this.playerService.currentGameId !== id) {
      await this.playerService.setCurrentGameId(id);
    }

    return this.currentPlayers.players;
  }
}
