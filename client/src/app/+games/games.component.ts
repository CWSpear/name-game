import { Component, OnInit } from '@angular/core';

import { IGame } from '../../../types';
import { GameService } from '../services/models/game/game.service';
import { ListEvents } from '../services/models/base-model.class';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  public games: IGame[];
  public token: string;

  constructor(private gameService: GameService, route: ActivatedRoute, user: UserService) {
      this.token = user.getToken();
      this.games = route.snapshot.data['games'];
  }

  async ngOnInit() {
    this.gameService.subscribeList([ListEvents.created, ListEvents.removed], this.games);
  }

  async removeGame(id) {
    await this.gameService.remove(id);
  }
}
