import { Component, OnInit } from '@angular/core';

import { IGame } from '../../../types';
import { Game } from '../services/models/game/game.service';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { ListEvents } from '../enums/list-events.enum';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  public games: IGame[] = [];
  public token: string;

  constructor(private gameModel: Game, route: ActivatedRoute, user: UserService) {
      this.token = user.getToken();
      this.games = route.snapshot.data['games'] || [];
  }

  async ngOnInit() {
    this.gameModel.subscribeList([ListEvents.created, ListEvents.removed], this.games);
  }

  async removeGame(id) {
    await this.gameModel.service.remove(id);
  }
}
