import { Injectable, NgZone } from '@angular/core';

import { IGame } from '../../../../../types';
import { FeathersService } from '../../feathers/feathers.service';
import { BaseModelService } from '../base-model.class';
import { OneEvents } from '../../../enums/one-event.enum';

@Injectable()
export class Game extends BaseModelService<IGame> {
  currentGame: IGame;

  constructor(feathersService: FeathersService, zone: NgZone) {
    super(zone);

    this.service = feathersService.client.service('api/games');
  }

  async setCurrentGameById(id: string): Promise<void> {
    this.currentGame = await this.service.get(id);

    this.subscribeOne([OneEvents.patched, OneEvents.updated], this.currentGame, (game) => game.id === id);
  }
}
