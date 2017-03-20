import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IGame, IPlayer } from '../../../types';
import { UserService } from '../services/user/user.service';
import { Game } from '../services/models/game/game.service';
import { Player } from '../services/models/player/player.service';

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

  async addPlayer(field) {
    await this.playerModel.service.create(<IPlayer>{ name: field.value, gameId: this.game.id });
    field.value = '';
  }

  async startGame() {
    await this.gameModel.service.patch(this.game.id, { started: true });

    await this.router.navigate(['play'], { relativeTo: this.route });
  }
}
