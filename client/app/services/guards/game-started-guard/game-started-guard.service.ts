import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Game } from '../../models/game/game.service';

@Injectable()
export class GameStartedGuard implements CanActivate {
  constructor(private gameModel: Game, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    const id = route.params['id'];
    if (!this.gameModel.currentGame || this.gameModel.currentGame.id !== id) {
      await this.gameModel.setCurrentGameById(id);
    }

    if (this.gameModel.currentGame.started) {
      this.router.navigate(['games', id, 'play']);
      return false;
    }

    return true;
  }
}
