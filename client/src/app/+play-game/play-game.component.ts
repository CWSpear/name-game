import { Component, OnInit } from '@angular/core';

import { IGame, IPlayer } from '../../../types';
import { UserService } from '../services/user/user.service';
import { Game } from '../services/models/game/game.service';
import { Player } from '../services/models/player/player.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss'],
})
export class PlayGameComponent implements OnInit {
  token: string;

  constructor(
    private gameModel: Game,
    private playerModel: Player,
    user: UserService,
  ) {
    this.token = user.getToken();
  }

  get game(): IGame {
    return this.gameModel.currentGame;
  }

  get players(): IPlayer[] {
    return this.playerModel.currentPlayers;
  }

  async ngOnInit() {}

  async showNextPlayer() {
    await this.gameModel.service.patch(this.game.id, { position: this.game.position + 1 });
  }

  async showPrevPlayer() {
    await this.gameModel.service.patch(this.game.id, { position: this.game.position - 1 });
  }

  async hideGame() {
    await this.gameModel.service.patch(this.game.id, { hidden: true });
  }

  async startGame() {
    await this.gameModel.service.patch(this.game.id, { started: true });
  }
}
