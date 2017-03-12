import { Injectable, NgZone } from '@angular/core';

import { IGame } from '../../../../../types';
import { FeathersService } from '../../feathers/feathers.service';
import { BaseModelService, OneEvents } from '../base-model.class';
import { CurrentGame } from '../../current-game/current-game.service';

@Injectable()
export class GameService extends BaseModelService<IGame> {
  constructor(private currentGame: CurrentGame, feathersService: FeathersService, zone: NgZone) {
    super(zone);

    this.service = feathersService.client.service('api/games');
  }

  async setCurrentGameId(id: string): Promise<void> {
    this.currentGame.game = await this.get(id);

    this.subscribeOne([OneEvents.patched, OneEvents.updated], this.currentGame.game, (game) => game.id === id);

    return super.setCurrentGameId(id);
  }
}
