import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Bluebird from 'bluebird';

import { IGame, IPlayer } from '../../../types';
import { gameService, playerService } from '../../models';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  game: IGame;
  players: IPlayer[];
  token: string;

  constructor(private route: ActivatedRoute, private zone: NgZone, user: UserService) {
    this.token = user.getToken();
  }

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];

    const [game, players] = await Bluebird.all([
      await gameService.get(id, <any>{
        sequelize: {
          include: 'players',
        },
      }),
      <IPlayer[]>await playerService.find({ query: { gameId: id } }),
    ]);

    this.game = game;
    console.log(game.players, game);
    this.players = players;

    playerService.on('created', (player: IPlayer) => {
      this.zone.run(() => {
        this.players.push(player);
      });
    });
  }

  async addPlayer(field) {
    await playerService.create(<IPlayer>{ name: field.value, gameId: this.game.id });
    field.value = '';
  }
}
