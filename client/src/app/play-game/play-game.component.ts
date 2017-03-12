import * as Bluebird from 'bluebird';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IGame, IPlayer } from '../../../types';
import { UserService } from '../../services/user/user.service';
import { gameService, playerService } from '../../models/index';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss'],
})
export class PlayGameComponent implements OnInit {
  game: IGame;
  players: IPlayer[];
  token: string;

  constructor(private route: ActivatedRoute, private zone: NgZone, user: UserService) {
    this.token = user.getToken();
  }

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];

    const [game, players] = await Bluebird.all([
      await gameService.get(id),
      <IPlayer[]>await playerService.find({ query: { gameId: id, $sort: { id: 1 } } }),
    ]);

    this.game = game;
    this.players = players;

    gameService.on('patched', (game: IGame) => {
      this.zone.run(() => {
        this.game = game;
      });
    });
  }

  async showNextPlayer() {
    await gameService.patch(this.game.id, { position: this.game.position + 1 });
  }

  async showPrevPlayer() {
    await gameService.patch(this.game.id, { position: this.game.position - 1 });
  }
}
