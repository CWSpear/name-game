import { Injectable } from '@angular/core';
import { IGame } from '../../../../types';

@Injectable()
export class CurrentGame {
  game: IGame;

  constructor() {}
}
