import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { gameService } from '../../models/index';
import { IGame } from '../../../types';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {
  constructor(private router: Router, private user: UserService) {}

  ngOnInit() {}

  async createGame(name: string) {
    const game = <IGame>await gameService.create(<IGame> { name, owner: this.user.getToken() });
    await this.router.navigate(['/games/', game.id]);
  }
}
