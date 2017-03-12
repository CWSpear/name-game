import { Component, OnInit, NgZone } from '@angular/core';

import { IGame } from '../../../types';
import { gameService } from '../../models/index';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  public games: IGame[];

  constructor(private zone: NgZone) {}

  async ngOnInit() {
    this.games = <IGame[]> await gameService.find();

    gameService.on('created', (game: IGame) => {
      this.zone.run(() => {
        this.games.push(game);
      });
    });
  }
}
