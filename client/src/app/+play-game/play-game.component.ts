import { Component, OnInit, NgZone } from '@angular/core';

import { IGame, IPlayer } from '../../../types';
import { UserService } from '../services/user/user.service';
import { GameService } from '../services/models/game/game.service';
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
    private gameService: GameService,
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

  async showNextPlayer() {
    await this.gameService.patch(this.game.id, { position: this.game.position + 1 });
  }

  async showPrevPlayer() {
    await this.gameService.patch(this.game.id, { position: this.game.position - 1 });
  }

  async hideGame() {
    await this.gameService.patch(this.game.id, { hidden: true });
  }

  async startGame() {
    await this.gameService.patch(this.game.id, { started: true });
  }
}
