import { Injectable, NgZone } from '@angular/core';
import { BaseModelService } from '../base-model.class';
import { IPlayer } from '../../../../../types';
import { Feathers } from '../../feathers/feathers.service';
import { ListEvents } from '../../../enums/list-events.enum';

@Injectable()
export class Player extends BaseModelService<IPlayer> {
  currentPlayers: IPlayer[] = [];
  currentGameId: string;

  constructor(feathers: Feathers, zone: NgZone) {
    super(zone);

    this.service = feathers.client.service('api/players');
  }

  async setCurrentPlayersByGameId(gameId: string): Promise<void> {
    this.currentPlayers = <IPlayer[]>await this.service.find({ query: { gameId, $sort: { id: 1 } } });
    this.currentGameId = gameId;

    this.subscribeList([ListEvents.created], this.currentPlayers, (player) => player.gameId === gameId);
  }
}
