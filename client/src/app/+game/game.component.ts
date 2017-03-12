import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Bluebird from 'bluebird';

import { IGame, IPlayer } from '../../../types';
import { UserService } from '../services/user/user.service';
import { GameService } from '../services/models/game/game.service';
import { CurrentGame } from '../services/current-game/current-game.service';
import { PlayerService } from '../services/models/player/player.service';
import { CurrentPlayers } from '../services/current-players/current-players.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  token: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private playerService: PlayerService,
    private currentGame: CurrentGame,
    private currentPlayers: CurrentPlayers,
    user: UserService,
  ) {
    this.token = user.getToken();
  }

  get game(): IGame {
    return this.currentGame.game;
  }

  get players(): IPlayer[] {
    return this.currentPlayers.players;
  }

  async ngOnInit() {}

  async addPlayer(field) {
    await this.playerService.create(<IPlayer>{ name: field.value, gameId: this.game.id });
    field.value = '';
  }

  async startGame() {
    await this.gameService.patch(this.game.id, { started: true });

    await this.router.navigate(['play'], { relativeTo: this.route });
  }
}
