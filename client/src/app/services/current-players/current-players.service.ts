import { Injectable } from '@angular/core';
import { IPlayer } from '../../../../types';

@Injectable()
export class CurrentPlayers {
  players: IPlayer[];

  constructor() {}
}
