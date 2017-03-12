import { Injectable, NgZone } from '@angular/core';
import { BaseModelService, ListEvents } from '../base-model.class';
import { CurrentPlayers } from '../../current-players/current-players.service';
import { IPlayer } from '../../../../../types';
import { FeathersService } from '../../feathers/feathers.service';

@Injectable()
export class PlayerService extends BaseModelService<IPlayer> {
  constructor(private currentPlayers: CurrentPlayers, feathersService: FeathersService, zone: NgZone) {
    super(zone);

    this.service = feathersService.client.service('api/players');
  }

  async setCurrentGameId(id: string): Promise<void> {
    this.currentPlayers.players = await this.find({ query: { gameId: id, $sort: { id: 1 } } });

    this.subscribeList([ListEvents.created], this.currentPlayers.players, (player) => player.gameId === id);

    return super.setCurrentGameId(id);
  }
}
