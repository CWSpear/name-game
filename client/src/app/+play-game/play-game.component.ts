import * as Bluebird from 'bluebird';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IGame, IPlayer } from '../../../types';
import { UserService } from '../services/user/user.service';
import { gameService, playerService } from '../../models/index';
import { GameService } from '../services/models/game/game.service';
import { PlayerService } from '../services/models/player/player.service';
import { CurrentGame } from '../services/current-game/current-game.service';
import { CurrentPlayers } from '../services/current-players/current-players.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss'],
})
export class PlayGameComponent implements OnInit {
  token: string;

  constructor(
    private route: ActivatedRoute,
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

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (this.playerService.currentGameId !== id) {
      await this.playerService.setCurrentGameId(id);
    }

    if (this.gameService.currentGameId !== id) {
      await this.gameService.setCurrentGameId(id);
    }
  }

  async showNextPlayer() {
    await gameService.patch(this.game.id, { position: this.game.position + 1 });
  }

  async showPrevPlayer() {
    await gameService.patch(this.game.id, { position: this.game.position - 1 });
  }

  async hideGame() {
    await gameService.patch(this.game.id, { hidden: true });
  }
}
